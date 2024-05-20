using System;
using System.Collections.Generic;

namespace Back.Model;

public partial class Tag
{
    public int Id { get; set; }

    public string Name { get; set; } = null!;

    public int Idclient { get; set; }

    public virtual ICollection<Event> Events { get; } = new List<Event>();

    public virtual Client IdclientNavigation { get; set; } = null!;
}
