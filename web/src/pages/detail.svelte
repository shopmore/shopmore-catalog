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
    let radioGroup;
    import {
            Button,
            Badge,
            Card,
            Icon,
            CardBody,
            CardFooter,
            CardHeader,
            CardSubtitle,
            CardText,
            CardTitle,
            Form,
            FormGroup,
            FormText,
            Input,
            Label,
            Col,
            Row,
            Pagination,
            PaginationItem,
            PaginationLink,
            Container,
            ListGroup,
            ListGroupItem,
            Breadcrumb,
            BreadcrumbItem
        } from 'sveltestrap';
    
</script>

<!-- ========================= SECTION PAGETOP ========================= -->
<section class="section-pagetop">
    <Container>
        <h2>Category products</h2>
        <Breadcrumb>
            <BreadcrumbItem>
                <a href="#home" class="text-decoration-none">Home</a>
            </BreadcrumbItem>
            <BreadcrumbItem>
                <a href="/category" class="text-decoration-none">Clothing</a>
            </BreadcrumbItem>
            <BreadcrumbItem active>
                Article detail
            </BreadcrumbItem>
        </Breadcrumb>
    </Container>
</section>
<!-- ========================= SECTION INTRO END// ========================= -->
    
<Container>
    <Row>
        <Col xs="3">
            <Menu />
        </Col>
        <Col md="9">
            <Card>
                <Row>
                    <aside class="col-md-6">
                        <article class="gallery">
                            <div class="img">
                                <a href="#"><img src="catalog/Bimbo/camiciabianca.png" height="500" width="400" alt="itemImage"></a>
                            </div>
                        </article>
                    </aside>
                    <CardBody class="col-md-6">
                        <article class="content-body">
            
                            <h2 class="title">Off-White Odsy-1000 Low-Top Sneakers</h2>
            
                            <div class="my-3">
                                <small class="label-rating text-muted">132 reviews</small>
                                <small class="label-rating text-success"> <Icon name="clipboard-check" /> 154 orders </small>
                            </div> <!-- rating-wrap.// -->
            
                            <div class="mb-3">
                                <var class="price h4">$815.00</var>
                                <span class="text-muted">/per kg</span>
                            </div>
            
                            <p>Virgil Abloh’s Off-White is a streetwear-inspired collection that continues to break away from the
                                conventions of mainstream fashion. Made in Italy, these black and brown Odsy-1000 low-top sneakers.
                            </p>
            
                            <dl class="row">
                                <dt class="col-sm-3">Model#</dt>
                                <dd class="col-sm-9">Odsy-1000</dd>
            
                                <dt class="col-sm-3">Color</dt>
                                <dd class="col-sm-9">Brown</dd>
            
                                <dt class="col-sm-3">Delivery</dt>
                                <dd class="col-sm-9">Russia, USA, and Europe </dd>
                            </dl>
            
                            <hr>
                            <Row>
                                <FormGroup class="col-sm-3">
                                    <Label for="quantitySelect">Quantity</Label>
                                    <Input type="select" name="select" id="exampleSelect">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                    </Input>
                                </FormGroup>
                                <FormGroup class="col-sm-3">
                                    <Label for="sizeSelect">Select size</Label>
                                    <Input id="r1" type="radio" bind:group={radioGroup} value="small" label="Small" />
                                    <Input id="r2" type="radio" bind:group={radioGroup} value="medium" label="Medium" />
                                    <Input id="r3" type="radio" bind:group={radioGroup} value="large" label="Large" />
                                </FormGroup>
                            </Row> <!-- row.// -->
                            <div class="mb-3">
                                <Button color="primary"> Buy now </Button>
                                <Button outline color="primary">
                                    <span class="text">Add to cart</span> <Icon name="cart-fill" />
                                </Button>
                            </div>
                        </article> <!-- product-info-aside .// -->
                    </CardBody> <!-- col.// -->
                </Row> <!-- row.// -->
            </Card> <!-- card.// -->
        </Col>
     </Row>
</Container>

