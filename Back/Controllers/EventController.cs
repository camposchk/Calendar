using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

namespace Back.Controllers;
using Services;

[ApiController]
[Route("event")]
public class EventController : ControllerBase
{
    [HttpPost("create")]
    [EnableCors("DefaultPolicy")]
    public async Task<IActionResult> Create(
        [FromBody] EventData data,
        [FromServices] IEventService service
    )
    {
        Console.WriteLine(data.Name);
        var errors = new List<string>();
        if (data is null)
            return BadRequest("É necessário enviar os dados do Evento");

        if (string.IsNullOrEmpty(data.Name))
            errors.Add("O nome do evento é obrigatório");

        if (data.StartDate == default(DateTime))
            errors.Add("A data de início do evento é obrigatória");
        try
        {
            await service.Create(data);
            return Ok("Criado com Sucesso");
        }
        catch (System.Exception)
        {
            return BadRequest("Houve algum erro");
        }
    }

    [HttpPost("get/{id}")]
    [EnableCors("DefaultPolicy")]
    public async Task<IActionResult> Get(
        int id,
        [FromServices] IEventService service
    )
    {
        var events = await service.GetByUserID(id);
        return Ok(events);
    }
}