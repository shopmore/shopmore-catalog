<script>
  import { text } from "svelte/internal";
  import { Col } from "sveltestrap";
  import { Icon } from "sveltestrap";
  import {
    Button,
    ButtonDropdown,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
  } from "sveltestrap";

  import { get } from "../../util";

  let isOpen = false;

  function handleUpdate(event) {
    isOpen = event.detail.isOpen;
  }
</script>

<Navbar color="navbar navbar-light bg-light" light expand="md">
  <NavbarBrand href="/">ShopMore <Icon name="cloud" /></NavbarBrand>

  <NavbarToggler on:click={() => (isOpen = !isOpen)} />
  <Collapse {isOpen} navbar expand="md" on:update={handleUpdate}>
    <Nav class="ms-auto" navbar>
      <NavItem>
        <form>
          <input type="text" size="40" />
          <Button secondary>Search</Button>
        </form>
      </NavItem>
      <NavItem>
        <NavLink href="/login"><Icon name="person" /></NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="/cart"><Icon name="cart" /></NavLink>
      </NavItem>
      <Dropdown nav inNavbar>
        <DropdownToggle nav caret>Category</DropdownToggle>
        <DropdownMenu end>
          <DropdownItem href="/category">Clothing</DropdownItem>
          <DropdownItem>Fashion</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>Reset</DropdownItem>
          {#await get("shopmore/category") then categories}
            {#each categories.category as category }
             <DropdownItem>{category}</DropdownItem>
            {/each}
          {/await}
        </DropdownMenu>
      </Dropdown>
    </Nav>
  </Collapse>
</Navbar>
