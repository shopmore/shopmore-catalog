<script>
    import { Accordion, AccordionItem } from "sveltestrap";
</script>

<Accordion>
    <AccordionItem active header="Home">Info</AccordionItem>
    <AccordionItem header="Clothing">
        <a href="#home">Men</a><br>
        <a href="#home">Women</a><br>
        <a href="#home">Child</a><br>
    </AccordionItem>
    <AccordionItem header="Fashion">Accesories</AccordionItem>
</Accordion>
