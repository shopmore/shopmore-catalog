<script>
  import { text } from 'svelte/internal';
  import { Table } from 'sveltestrap';
  import { ButtonToolbar } from 'sveltestrap';
  import { Icon, Styles } from 'sveltestrap';
  import { Badge } from 'sveltestrap';
  import { Container } from 'sveltestrap';
  import { Alert } from 'sveltestrap';
  import {
      Button,
      Card,
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
      Row
    } from 'sveltestrap';

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
    import Menu from "./_components/Menu.svelte";
</script>

<!-- ========================= SECTION PAGETOP ========================= -->
<section class="section-pagetop">
    <Container>
      <h2>Shopping cart</h2>
    </Container>
</section>
<!-- ========================= SECTION INTRO END// ========================= -->

<!-- ========================= SECTION CONTENT ========================= -->
<section class="section-content padding-y">
  <Container>
    <Row>
      <Col xs="3">
        <Menu />
      </Col>
      <Col md = "6">
        <Card>
          <table class="table table-borderless table-shopping-cart">
            <thead class="text-muted">
              <tr class="small text-uppercase">
                <th scope="col">Product</th>
                <th scope="col" width="120">Quantity</th>
                <th scope="col" width="120">Price</th>
                <th scope="col" class="text-right" width="200"> </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <figure class="itemside">
                    <div class="aside"><img src="catalog/Bimbo/camiciabianca.png" alt="imageItem" class="img-sm" width="80" height="80"></div>
                    <figcaption class="info">
                      <a href="#" class="title text-dark text-decoration-none">Name of some product</a>
                      <p class="text-muted small">Size: XL, Color: blue, <br> Brand: Gucci</p>
                    </figcaption>
                  </figure>
                </td>
                <td>
                  <FormGroup>
                    <Input type="select" name="select" id="Select">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </Input>
                  </FormGroup>
                </td>
                <td>
                  <div class="price-wrap">
                    <var class="price">$1156.00</var>
                    <small class="text-muted"> $315.20 each </small>
                  </div> <!-- price-wrap .// -->
                </td>
                <td class="text-right">
                  <Button>
                    <Icon name="suit-heart-fill" />
                  </Button>
                  <Button>Remove</Button>
                </td>
              </tr>
              <tr>
                <td>
                  <figure class="itemside">
                    <div class="aside"><img src="catalog/Bimbo/camiciabianca.png" alt="imageItem" class="img-sm" width="80" height="80"></div>
                    <figcaption class="info">
                      <a href="#" class="title text-dark text-decoration-none">Name of some product</a>
                      <p class="text-muted small">Size: XL, Color: blue, <br> Brand: Gucci</p>
                    </figcaption>
                  </figure>
                </td>
                <td>
                  <FormGroup>
                    <Input type="select" name="select" id="Select">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </Input>
                  </FormGroup>
                </td>
                <td>
                  <div class="price-wrap">
                    <var class="price">$149.97</var>
                    <small class="text-muted"> $75.00 each </small>
                  </div> <!-- price-wrap .// -->
                </td>
                <td class="text-right">
                  <Button>
                    <Icon name="suit-heart-fill" />
                  </Button>
                  <Button>Remove</Button>
                </td>
              </tr>
              <tr>
                <td>
                  <figure class="itemside">
                    <div class="aside"><img src="catalog/Bimbo/camiciabianca.png" alt="imageItem" class="img-sm" width="80" height="80"></div>
                    <figcaption class="info">
                      <a href="#" class="title text-dark text-decoration-none">Name of some product</a>
                      <p class="small text-muted">Size: XL, Color: blue, Brand: Tissot</p>
                    </figcaption>
                  </figure>
                </td>
                <td>
                  <FormGroup>
                    <Input type="select" name="select" id="Select">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </Input>
                  </FormGroup>
                </td>
                <td>
                  <div class="price-wrap">
                    <var class="price">$198.00</var>
                    <small class="text-muted"> $578.00 each</small>
                  </div> <!-- price-wrap .// -->
                </td>
                <td class="text-right">
                  <Button><Icon name="suit-heart-fill" /></Button>
                  <Button>Remove</Button>
                </td>
              </tr>
            </tbody>
          </table>
        </Card> <!-- card.// -->

      </Col> <!-- col.// -->
      <Col md = "3">
        <Card class="mb-4">
          <CardBody>
            <form>
              <div class="form-group">
                <label for="Coupon">Have coupon?</label>
                <div class="input-group">
                  <input type="text" class="form-control" name="couponCode">
                  <Button color="primary">Apply</Button>
                </div>
              </div>
            </form>
          </CardBody> <!-- card-body.// -->
        </Card> <!-- card .// -->
        <Card class="mb-4">
          <CardBody class="text-center">
            <dl>
              <dt>Total price:</dt>
              <dd>USD 568</dd>
            </dl>
            <dl>
              <dt>Discount:</dt>
              <dd>USD 658</dd>
            </dl>
            <dl>
              <dt>Total:</dt>
              <dd class="h5"><strong>$1,650</strong></dd>
            </dl>
            <hr>
            <p class="text-center mb-4">
              <img src="catalog/Bimbo/camiciabianca.png" alt="imagePayments" width="100" height="26">
            </p>
          </CardBody> <!-- card-body.// -->
        </Card> <!-- card .// -->

        <Card class="mb-8">
          <Button color="light">
            <Icon name="chevron-compact-left" /> Make Purchase
          </Button>
          <Button color="primary">Continue shopping
            <Icon name="chevron-compact-right" />
          </Button>
        </Card>

        <CardBody class="mb-4">
          <Alert color="success" fade={false}>
            <p class="icontext">
              <Icon name="truck" /> Free Delivery within 1-2 weeks
            </p>
          </Alert>
        </CardBody>
        
      </Col> <!-- col.// -->
    </Row>
  </Container> <!-- container .//  -->
</section>
<!-- ========================= SECTION CONTENT END// ========================= -->
<Styles />
