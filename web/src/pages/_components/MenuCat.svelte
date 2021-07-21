<script>
    import { Accordion, AccordionItem } from "sveltestrap";
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
</script>

<Accordion>
    <AccordionItem active header="Category">
    {#await get("shopmore/categoryproducts") then categoriesprod}
            {#each categoriesprod.categoryproduct as catprod }
             <a href={"/catprod?"+catprod}>{catprod}</a><br>
            {/each}
    {/await}
     
    </AccordionItem>
    <AccordionItem header="Price">
        <a href="#home">0-50 euros</a><br>
        <a href="#home">50-150 euros</a><br>
        <a href="#home">More than 150 euros</a><br>
    </AccordionItem>
    <AccordionItem header="Size">
    <Button light>S</Button> <Button light>M</Button> <Button light>L</Button> <Button light>XL</Button>
    </AccordionItem>
</Accordion>
