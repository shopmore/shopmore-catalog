<script>
    import { get } from "../../util";
    import Menu from "../_components/Menu.svelte";
    import { params } from "@roxi/routify";
    const colors = [
        "primary",
        "secondary",
        "success",
        "danger",
        "warning",
        "info",
        "light",
        "dark",
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
        BreadcrumbItem,
    } from "sveltestrap";

    let id = $params.id
</script>

<!-- ========================= SECTION PAGETOP ========================= -->
<section class="section1-pagetop">
    <Container>
        <h2>Category products</h2>
        <Breadcrumb>
            <BreadcrumbItem>
                <a href="#home" class="text-decoration-none">Home</a>
            </BreadcrumbItem>
            <BreadcrumbItem>
                <a href="/category" class="text-decoration-none">Clothing</a>
            </BreadcrumbItem>
            <BreadcrumbItem active>Article detail</BreadcrumbItem>
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
                {#await get("shopmore/product?id="+id) then prod}
                    <Row>
                        <aside class="col-md-6">
                            <article class="gallery">
                                <div class="img">
                                    <a href="#"
                                        ><img
                                            src={prod.product.urlimage}
                                            height="500"
                                            width="400"
                                            alt="itemImage"
                                        /></a
                                    >
                                </div>
                            </article>
                        </aside>
                        <CardBody class="col-md-6">
                            <article class="content-body">
                                <h2 class="title">{prod.product.name}</h2>

                                <div class="my-3">
                                    <small class="label-rating text-muted"
                                        >132 reviews</small
                                    >
                                    <small class="label-rating text-success">
                                        <Icon name="clipboard-check" /> 154 orders
                                    </small>
                                </div>

                                <div class="mb-3">
                                    <var class="price h4"
                                        >{prod.product.price}&euro;</var
                                    >
                                </div>

                                <p>{prod.product.description}</p>
                                <dl class="row">
                                    <dt class="col-sm-3">Model#</dt>
                                    <dd class="col-sm-9">
                                        {prod.product.model}
                                    </dd>

                                    <dt class="col-sm-3">Color</dt>
                                    <dd class="col-sm-9">Brown</dd>
                                </dl>

                                <hr />
                                <Row>
                                    <FormGroup class="col-sm-3">
                                        <Label for="quantitySelect"
                                            >Quantity</Label
                                        >
                                        <Input
                                            type="select"
                                            name="select"
                                            id="exampleSelect"
                                        >
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                        </Input>
                                    </FormGroup>
                                    <FormGroup class="col-sm-3">
                                        <Label for="sizeSelect"
                                            >Select size</Label
                                        >

                                        {#each prod.product.size as sz, i}
                                            <Input
                                                id="r{i + 1}"
                                                type="radio"
                                                bind:group={radioGroup}
                                                value={sz}
                                                label={sz}
                                            />
                                        {/each}
                                    </FormGroup>
                                </Row>

                                <div class="mb-3">
                                    <Button color="primary">Buy now</Button>
                                    <Button outline color="primary">
                                        <span class="text">Add to cart</span>
                                        <Icon name="cart-fill" />
                                    </Button>
                                </div>
                            </article>
                            <!-- product-info-aside .// -->
                        </CardBody>
                        <!-- col.// -->
                    </Row>
                {/await}
                <!-- row.// -->
            </Card>
            <!-- card.// -->
        </Col>
    </Row>
</Container>
