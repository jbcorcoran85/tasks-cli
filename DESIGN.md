# Tasks design

```
tasks new *Subject* *comment* --priority "Normal" --status *Not Started*
```

```
tasks list
```

## Arguments
Positional arguments passed to a command. 
Do not contian -- character. Have a specific order.

```
tasks new *Subject* *This is a comment* --priority "Urgent" -s "Not  Started"

## Flags
Not positional. 
Can be a string or a boolean