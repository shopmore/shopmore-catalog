<script>
  import { text } from 'svelte/internal';
  import { Table } from 'sveltestrap';
  import { ButtonToolbar } from 'sveltestrap';
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
</script>


<section class="section-pagetop">
  <div class="container">
    <h2 class="title-page">Shopping cart</h2>
  </div>
</section>

<section class="section-content">
  <Row>
    <Col md-9>
      <div class="card">
        <Table borderless>
          <thead>
            <tr>
              <th>Product</th>
              <th>Quantity</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <figure class="itemside">
                  <img src="img.jpeg">
                  <figcaption class="info">
                    <a href="#" class="title-text">Name of item</a>
                    <p class="text-muted">Size:XL, Color:blue, Brand: Gucci</p>
                  </figcaption>
                </figure>
              </td>
              <td>
                <FormGroup>
                  <Input type="select" name="select" id="quantitySelect">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  </Input>
                </FormGroup>
              </td>
              <td>
                <var class="price">$2600</var>
                <small class="text-muted">$515.20 each</small>
              </td>
              <td>
                <ButtonToolbar>
                  <Button>Like</Button>
                  <Button>Remove</Button>
                </ButtonToolbar>
              </td>
            </tr>
            <tr>
              <td>
                <figure class="itemside">
                  <img src="img.jpeg">
                  <figcaption class="info">
                    <a href="#" class="title-text">Name of item</a>
                    <p class="text-muted">Size:XL, Color:blue</p>
                  </figcaption>
                </figure>
              </td>
              <td>
                <FormGroup>
                  <Input type="select" name="select" id="quantitySelect">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  </Input>
                </FormGroup>
              </td>
              <td>
                <var class="price">$354</var><br>
                <small class="text-muted">$152.23 each</small>
              </td>
              <td></td>
            </tr>
            <tr>
              <td>
                <figure class="itemside">
                  <img src="img.jpeg">
                  <figcaption class="info">
                    <a href="#" class="title-text">Name of item</a>
                    <p class="text-muted">Size:XL, Color:blue, Brand: Gucci</p>
                  </figcaption>
                </figure>
              </td>
              <td>
                <FormGroup>
                  <Input type="select" name="select" id="quantitySelect">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  </Input>
                </FormGroup>
              </td>
              <td>
                <var class="price">$1304</var>
                <small class="text-muted">$315.20 each</small>
              </td>
              <td>
                <ButtonToolbar>
                  <Button>Like</Button>
                  <Button>Remove</Button>
                </ButtonToolbar>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </Col>
    <Col md-3></Col>
  </Row>
</section>

<style>
  a{
    text-decoration: none;
    background-color: transparent;
    color: black;
  }

  img{
    border-style: none;
    width: 80px;
    height: 80px;
  }

  .text-muted{
    color: #969696 !important;
    font-size: 80%;
    font-weight: 400;
  }
</style>