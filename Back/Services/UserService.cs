using System.Linq;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;

namespace Back.Services;

using DTO;
using Model;

public class UserService : IUserService
{
    CalendarContext ctx;
    ISecurityService security;
    public UserService(CalendarContext ctx, ISecurityService security)
    {
        this.ctx = ctx;
        this.security = security;
    }

    public async Task Create(UserData data)
    {
        Client usuario = new Client();
        var salt = await security.GenerateSalt();

        usuario.Cpf = data.Login;
        usuario.Name = data.Nome;
        usuario.Password = await security.HashPassword(
            data.Password, salt
        );
        usuario.Salt = salt;

        this.ctx.Add(usuario);
        await this.ctx.SaveChangesAsync();
    }

    public async Task<Client> GetByLogin(string login)
    {
        var query =
            from u in this.ctx.Clients
            where u.Cpf == login
            select u;
        
        return await query.FirstOrDefaultAsync();
    }
}