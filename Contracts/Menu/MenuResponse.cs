namespace Contracts.Menu;

public record MenuResponse(
    string Id,
    string Name,
    string Description,
    List<MenuSectionResponse> Sections);

public record MenuSectionResponse(
    string Id,
    string Name,
    string Description,
    List<MenuItemResponse> Items);

public record MenuItemResponse(
    string Id,
    string Name,
    string Description);