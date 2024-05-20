using System;
using System.Collections.Generic;

namespace Back.Model;

public partial class Event
{
    public int Id { get; set; }

    public string Name { get; set; } = null!;

    public string? Description { get; set; }

    public TimeSpan? StartTime { get; set; }

    public TimeSpan? EndTime { get; set; }

    public DateTime StartDate { get; set; }

    public DateTime? EndDate { get; set; }

    public bool? Done { get; set; }

    public int Idclient { get; set; }

    public int? Idtag { get; set; }

    public virtual Client IdclientNavigation { get; set; } = null!;

    public virtual Tag? IdtagNavigation { get; set; }
}
