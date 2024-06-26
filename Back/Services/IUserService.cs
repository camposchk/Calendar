using System.Threading.Tasks;

namespace Back.Services;

using DTO;
using Model;

public interface IUserService
{
    Task Create(UserData data);
    Task<Client> GetByLogin(string login);
}