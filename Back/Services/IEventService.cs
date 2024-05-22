namespace Back.Services;

using DTO;
using Model;

public interface IEventService
{
    Task Create(EventData data);
    Task Update(EventData data);
    Task DeleteByID(int Id);
    Task<List<Event>> GetByUserID(int Id);
}