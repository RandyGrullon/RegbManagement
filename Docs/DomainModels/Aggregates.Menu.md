# Domain Models

# Menu

```csharp
 class Menu
{
   Menu Create();
    void AddDinner(Dinner dinner);
    void ReniveDubber(Dinner dinner);
    void UpdateSection(MenuSection section)
}

```

```json
{
    "id": "00000000-0000-0000-0000-0000000000",
    "name": "Menu Name",
    "description": "Menu Description",
    "hostId": "00000000-0000-0000-0000-0000000000",
    "sections": [
        {
            "id": "00000000-0000-0000-0000-0000000000",
            "name": "Appetizers",
            "description": "A menu with yummy food",
            "averageRating": 4.5
            "items": [
                {
                    "id": "00000000-0000-0000-0000-0000000000",
                    "name": "Appetizer 1",
                    "description": "Appetizer 1 Description",
                    "price": 10.00,
                    "image": "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
                },
                {
                    "id": "00000000-0000-0000-0000-0000000000",
                    "name": "Appetizer 2",
                    "description": "Appetizer 2 Description",
                    "price": 10.00,
                    "image": "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
                },
                {
                    "id": "00000000-0000-0000-0000-0000000000",
                    "name": "Appetizer 3",
                    "description": "Appetizer 3 Description",
                    "price": 10.00,
                    "image": "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
                }
            ]
        },
    ],
    "CreatedDateTime" : "2023-02-23T00:00:00.0000000Z",
    "UpdatedDateTime" : "2023-02-23T00:00:00.0000000Z",
    "dinnerIds":
    [
        "00000000-0000-0000-0000-0000000000",
        "00000000-0000-0000-0000-0000000000",
        "00000000-0000-0000-0000-0000000000"
    ],
    "menuReviewIds": [
        "00000000-0000-0000-0000-0000000000",
        "00000000-0000-0000-0000-0000000000",
        "00000000-0000-0000-0000-0000000000"
    ],
    
}
```
