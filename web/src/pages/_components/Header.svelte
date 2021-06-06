<script>
    import { Col } from "sveltestrap";
    import {
        Button,
        ButtonDropdown,
        DropdownItem,
        DropdownMenu,
        DropdownToggle,
    } from "sveltestrap";
</script>

<Col>
    <a href="/example">Example</a>
    <ButtonDropdown>
        <Button
            color="primary"
            on:click={() => alert("Cool, I didn't trigger the dropdown")}
        >
            Click Me
        </Button>
        <DropdownToggle split color="primary" />
        <DropdownMenu>
            <DropdownItem header>Header</DropdownItem>
            <DropdownItem>Some Action</DropdownItem>
            <DropdownItem disabled>Action (disabled)</DropdownItem>
            <DropdownItem divider />
            <DropdownItem>Foo Action</DropdownItem>
            <DropdownItem>Bar Action</DropdownItem>
            <DropdownItem>Quo Action</DropdownItem>
        </DropdownMenu>
    </ButtonDropdown>
    Header:
    <a href="/">Home</a> |
    <a href="/about">About</a>
</Col>
