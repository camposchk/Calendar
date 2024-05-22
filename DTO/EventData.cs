namespace DTO;

public class EventData
{
    public int Id { get; set; }

    public string Name { get; set; } = null!;

    public string? Description { get; set; }

    public TimeSpan? StartTime { get; set; }

    public TimeSpan? EndTime { get; set; }

    public DateTime StartDate { get; set; }

    public DateTime? EndDate { get; set; }

    public bool? Done { get; set; }

    public int IdClient { get; set; }

    public int? IdTag { get; set; }
}
