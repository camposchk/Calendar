using System;
using System.Collections.Generic;

namespace Back.Model;

public partial class Client
{
    public int Id { get; set; }

    public string Name { get; set; } = null!;

    public string Cpf { get; set; } = null!;

    public string Password { get; set; } = null!;

    public string Salt { get; set; } = null!;

    public virtual ICollection<Event> Events { get; } = new List<Event>();

    public virtual ICollection<Tag> Tags { get; } = new List<Tag>();
}
