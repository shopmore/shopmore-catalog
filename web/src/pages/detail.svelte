<script>
    import Menu from "./_components/Menu.svelte";
    const colors = [
            'primary',
            'secondary',
            'success',
            'danger',
            'warning',
            'info',
            'light',
            'dark'
        ];
    import { Col, Container, Row } from 'sveltestrap';
    
</script>

<section class="section-content padding-y">
    <Container>
        <Row>
            <Col xs="3">
            <Menu />
            </Col>
        </Row>
    </Container>
</section>

