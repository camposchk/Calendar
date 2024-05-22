using Back.Model;

namespace Back.Services;

using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Model;

public class EventService : IEventService
{
    CalendarContext ctx;

    public EventService(CalendarContext ctx)
    {
        this.ctx = ctx;
    }

    public async Task Create(EventData data)
    {
        Console.WriteLine(data.Name);

        Event task = new Event();

        task.Name = data.Name;
        task.Description = data.Description;
        task.Done = false;
        task.EndDate = data.EndDate;
        task.EndTime = data.EndTime;
        task.StartDate = data.StartDate;
        task.StartTime = data.StartTime;
        task.Idclient = data.IdClient;
        task.Idtag = data.IdTag;

        this.ctx.Add(task);
        await this.ctx.SaveChangesAsync();
    }

    public async Task DeleteByID(int Id)
    {
        var task = await this.ctx.Events.FindAsync(Id);

        if (task != null)
        {
            this.ctx.Remove(task);
            await ctx.SaveChangesAsync();
        }
    }

    public async Task<List<Event>> GetByUserID(int Id)
    {
        var query = from e in this.ctx.Events where e.Idclient == Id select e;
        return await query.ToListAsync();
    }

    public async Task Update(EventData data)
    {
        var existingEvent = await ctx.Events.FindAsync(data.Id);

        if (existingEvent == null)
        {
            throw new ArgumentException("Evento não encontrado.");
        }

        existingEvent.Name = data.Name;
        existingEvent.Description = data.Description;
        existingEvent.StartTime = data.StartTime;
        existingEvent.EndTime = data.EndTime;
        existingEvent.StartDate = data.StartDate;
        existingEvent.EndDate = data.EndDate;
        existingEvent.Done = data.Done;
        existingEvent.Idclient = data.IdClient;
        existingEvent.Idtag = data.IdTag;

        await ctx.SaveChangesAsync();
    }
}