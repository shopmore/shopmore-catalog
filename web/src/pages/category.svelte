<script>
  import { text } from 'svelte/internal';
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
    Row,
    Pagination, 
    PaginationItem,
     PaginationLink
  } from 'sveltestrap';
  import MenuCat from "./_components/MenuCat.svelte";
</script>
<Row>
<Col xs="3">
    <MenuCat />
</Col>
<Col xs="9">

<Card>
  <CardHeader>
    <CardTitle>1 Items found</CardTitle>
  </CardHeader>
  <CardBody>
    <CardSubtitle></CardSubtitle>
    <CardText>
    <Form>
      <FormGroup>
      <table>
      <tr>
      <td><img src="catalog/Bimbo/camiciabianca.png" alt="Shirt" height="250px" width="150px"></td>
      <td> <h3>Name product</h3>
      <p>Description Description Description Description </p></td>
      <td>
      <h3>10 euros</h3>
      <Button color="primary">Add wish list</Button></td>
      </tr>
      </table>
       
         
       
       
       
      </FormGroup>
      <FormGroup>
       <Button color="danger" block>Details</Button>
      </FormGroup>
      
    </Form>
   
    </CardText>
    
  </CardBody>
  <CardFooter><Pagination ariaLabel="Page navigation example">
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
</Pagination></CardFooter>
</Card>

</Col>
</Row>
