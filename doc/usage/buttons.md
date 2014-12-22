# Buttons

```hbs
{{materialize-button text='Button' action='debug'}}
```

The component supports many options:
* **text**, default value `null`
* **action**, default value `null`
* **icon**, default value `null`
* **iconPosition**, default value `left`
* **buttonType**, default value  `null`
* **isDisabled**, default value `false`

Let me show you how to use all these options.

Text:
```hbs
{{materialize-button text='Button'}}
```

Action:
```hbs
{{materialize-button text='Button' action='debug'}}
```

Icon:
```hbs
{{materialize-button text='Button' icon='mdi-action-favorite' action='debug'}}
```

IconPosition:
```hbs
{{materialize-button text='Button' icon='mdi-action-favorite' iconPosition='right' action='debug'}}
```
ButtonType:
```hbs
{{materialize-button icon='mdi-action-favorite' action='debug' buttonType='floating'}}
{{materialize-button text='Flat button' action='debug' buttonType='flat'}}
{{materialize-button text='Large button' action='debug' buttonType='large'}}
```

IsDisabled:
```hbs
{{materialize-button text='Disabled button' isDisabled=true}}
```

Submit:
```hbs
{{materialize-button-submit icon='mdi-content-send' iconPosition='right' text='Submit'}}
```
