<!-- routify:options preload="proximity" -->
<script>
    import Header from "./_components/Header.svelte";
    import Footer from "./_components/Footer.svelte";
    import Menu from "./_components/Menu.svelte";
    import { Col, Container, Row } from "sveltestrap";

    import { metatags } from "@roxi/routify";
    metatags.title = "ShopMore";
    metatags.description = "ShopMore is ServerLess";

</script>

<Container>
    <Row>
        <Col>
            <Header />
        </Col>
    </Row>
    <Row>
        <Col xs="12">
            <hr> 
        </Col>
    </Row>
    <Row>
        
        <Col xs="12">
            <slot />
        </Col>
    </Row>
    <Row>
        <Col xs="12">
           <hr> 
        </Col>
    </Row>
    <Row>
        <Col>
            <Footer />
        </Col>
    </Row>
</Container>
