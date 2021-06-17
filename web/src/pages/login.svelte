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
    Row
  } from 'sveltestrap';
import Cart from './cart.svelte';
import Header from './_components/Header.svelte';
  
</script>
<Row>
<Col xs="3"></Col>

<Col xs="6" >

<Card>
  <CardHeader>
    <CardTitle>Sign in</CardTitle>
  </CardHeader>
  <CardBody>
    <CardSubtitle></CardSubtitle>
    <CardText>
    <Form>
      <FormGroup>
       <Button color="primary" block >Sign in with facebook</Button>
      </FormGroup>
      <FormGroup>
       <Button color="danger" block>Sign in with Google</Button>
      </FormGroup>
      <FormGroup>
      <Input type="text" placeholder="Username" alt="username" />
      <Input type="password" placeholder="Password" alt="password" />
      </FormGroup>
      <FormGroup>
      <Input id="c1" type="checkbox" label="Remember" />
      Forgot password?
     </FormGroup>
    </Form>
   
    </CardText>
    <Button color="primary">Login</Button>
  </CardBody>
  <CardFooter>Don't have account? Sign up</CardFooter>
</Card>
</Col>
<Col xs="3"></Col>

</Row>
