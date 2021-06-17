<script>
  import { text } from 'svelte/internal';
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
  import MenuCat from "./_components/MenuCat.svelte";
</script>

<!-- ========================= SECTION PAGETOP ========================= -->
<section class="section-pagetop">
  <Container>
    <h2>Category products</h2>
    <Breadcrumb>
      <BreadcrumbItem>
        <a href="#home" class="text-decoration-none">Home</a>
      </BreadcrumbItem>
      <BreadcrumbItem active>Clothing</BreadcrumbItem>
    </Breadcrumb>
  </Container>
</section>
<!-- ========================= SECTION INTRO END// ========================= -->

<Row>
  <Col xs="3">
      <MenuCat />
  </Col>
  <Col xs="9">
    <Row>
      <Col md="4">
        <Card color="light" class="mb-3">
          <CardBody>
            <Badge href="/detail" color="danger" class="text-decoration-none">
              <Icon name="search" />Details
            </Badge>
            <img src="catalog/Bimbo/camiciabianca.png" alt="itemImage" height="220" width="220">
          </CardBody> <!-- img-wrap.// -->
          <CardFooter color="light">
              <a href="#" class="title text-decoration-none">Great item name goes here</a>
              <div class="mt-2 mb-2">
                <span class="price">$1280</span>
              </div> <!-- price-wrap.// -->
            <div class="mb-1">
              <Button block color="primary" href="#" >Add to cart</Button>
            </div>
          </CardFooter>
        </Card>
      </Col> <!-- col.// -->
    
      <Col md="4">
        <Card color="light" class="mb-3">
          <CardBody>
            <Badge href="/detail" color="danger" class="text-decoration-none">
              <Icon name="search" />Details
            </Badge>
            <img src="catalog/Bimbo/camiciabianca.png" alt="itemImage" height="220" width="220">
          </CardBody> <!-- img-wrap.// -->
          <CardFooter color="light">
            <a href="#" class="title text-decoration-none">Great item name goes here</a>
            <div class="mt-2 mb-2">
              <span class="price">$1280</span>
            </div> <!-- price-wrap.// -->
            <div class="mb-1">
              <Button block color="primary" href="#">Add to cart</Button>
            </div>
          </CardFooter>
        </Card>
      </Col> <!-- col.// -->
    
      <Col md="4">
        <Card color="light" class="mb-3">
          <CardBody>
            <Badge href="/detail" color="danger" class="text-decoration-none">
              <Icon name="search" />Details
            </Badge>
            <img src="catalog/Bimbo/camiciabianca.png" alt="itemImage" height="220" width="220">
          </CardBody> <!-- img-wrap.// -->
          <CardFooter color="light">
            <a href="#" class="title text-decoration-none">Great item name goes here</a>
            <div class="mt-2 mb-2">
              <span class="price">$1280</span>
            </div> <!-- price-wrap.// -->
            <div class="mb-1">
              <Button block color="primary" href="#">Add to cart</Button>
            </div>
          </CardFooter>
        </Card>
      </Col> <!-- col.// -->
    
      <Col md="4">
        <Card color="light" class="mb-3">
          <CardBody>
            <Badge href="/detail" color="danger" class="text-decoration-none">
              <Icon name="search" />Details
            </Badge>
            <img src="catalog/Bimbo/camiciabianca.png" alt="itemImage" height="220" width="220">
          </CardBody> <!-- img-wrap.// -->
          <CardFooter color="light">
            <a href="#" class="title text-decoration-none">Great item name goes here</a>
            <div class="mt-2 mb-2">
              <span class="price">$1280</span>
            </div> <!-- price-wrap.// -->
            <div class="mb-1">
              <Button block color="primary" href="#">Add to cart</Button>
            </div>
          </CardFooter>
        </Card>
      </Col> <!-- col.// -->
    
      <Col md="4">
        <Card color="light" class="mb-3">
          <CardBody>
            <Badge href="/detail" color="danger" class="text-decoration-none">
              <Icon name="search" />Details
            </Badge>
            <img src="catalog/Bimbo/camiciabianca.png" alt="itemImage" height="220" width="220">
          </CardBody> <!-- img-wrap.// -->
          <CardFooter color="light">
            <a href="#" class="title text-decoration-none">Great item name goes here</a>
            <div class="mt-2 mb-2">
              <span class="price">$1280</span>
            </div> <!-- price-wrap.// -->
            <div class="mb-1">
              <Button block color="primary" href="#">Add to cart</Button>
            </div>
          </CardFooter>
        </Card>
      </Col> <!-- col.// -->
    
      <Col md="4">
        <Card color="light" class="mb-3">
          <CardBody>
            <Badge href="/detail" color="danger" class="text-decoration-none">
              <Icon name="search" />Details
            </Badge>
            <img src="catalog/Bimbo/camiciabianca.png" alt="itemImage" height="220" width="220">
          </CardBody> <!-- img-wrap.// -->
          <CardFooter color="light">
            <a href="#" class="title text-decoration-none">Great item name goes here</a>
            <div class="mt-2 mb-2">
              <span class="price">$1280</span>
            </div> <!-- price-wrap.// -->
            <div class="mb-1">
              <Button block color="primary" href="#">Add to cart</Button>
            </div>
          </CardFooter>
        </Card>
      </Col> <!-- col.// -->
    
      <Col md="4">
        <Card color="light" class="mb-3">
          <CardBody>
            <Badge href="/detail" color="danger" class="text-decoration-none">
              <Icon name="search" />Details
            </Badge>
            <img src="catalog/Bimbo/camiciabianca.png" alt="itemImage" height="220" width="220">
          </CardBody> <!-- img-wrap.// -->
          <CardFooter color="light">
            <a href="#" class="title text-decoration-none">Great item name goes here</a>
            <div class="mt-2 mb-2">
              <span class="price">$1280</span>
            </div> <!-- price-wrap.// -->
            <div class="mb-1">
              <Button block color="primary" href="#">Add to cart</Button>
            </div>
          </CardFooter>
        </Card>
      </Col> <!-- col.// -->
    
      <Col md="4">
        <Card color="light" class="mb-3">
          <CardBody>
            <Badge href="/detail" color="danger" class="text-decoration-none">
              <Icon name="search" />Details
            </Badge>
            <img src="catalog/Bimbo/camiciabianca.png" alt="itemImage" height="220" width="220">
          </CardBody> <!-- img-wrap.// -->
          <CardFooter color="light">
            <a href="#" class="title text-decoration-none">Great item name goes here</a>
            <div class="mt-2 mb-2">
              <span class="price">$1280</span>
            </div> <!-- price-wrap.// -->
            <div class="mb-1">
              <Button block color="primary" href="#">Add to cart</Button>
            </div>
          </CardFooter>
        </Card>
      </Col> <!-- col.// -->
    </Row>
  </Col>

  <Col xs="3"></Col>
  <Col xs="9">
    <Pagination ariaLabel="Page navigation example">
      <PaginationItem disabled>
        <PaginationLink first href="#" />
      </PaginationItem>
      <PaginationItem disabled>
        <PaginationLink previous href="#" />
      </PaginationItem>
      <PaginationItem active>
        <PaginationLink href="#">1</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#">2</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#">3</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#">4</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#">5</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink next href="#" />
      </PaginationItem>
      <PaginationItem>
        <PaginationLink last href="#" />
      </PaginationItem>
    </Pagination>
  </Col>
</Row>