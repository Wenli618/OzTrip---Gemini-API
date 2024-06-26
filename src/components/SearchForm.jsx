

import { Button, Col, Row, Form } from 'react-bootstrap';
import { useForm, Controller } from 'react-hook-form'
import { joiResolver } from '@hookform/resolvers/joi'
import * as Joi from 'joi'



function SearchForm({ parentOnSubmit, loading }) {

  const schema = Joi.object({
    city: Joi.string().required(),
    numberOfDays: Joi.number().min(1).max(10).required(),
    numberOfAdults: Joi.number().integer().min(1).max(10).required(),
    numberOfChildren: Joi.number().integer().min(0).max(10).required(),
  })

  // set up form using react-hook-form
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: joiResolver(schema),
  })


  return (
    <Form onSubmit={handleSubmit(parentOnSubmit)} className="heroRight">
      <p>Create a day by day plan </p>
      <Row className='mb-4'>
        <Form.Group as={Col} controlId="city">
          <Form.Label visuallyHidden="true" >Input a City</Form.Label>
          <Controller
            name='city'
            control={control}
            defaultValue=''
            render={({field }) => (<Form.Control {...field} type='text' placeholder="Input a city" />)}
          />
        </Form.Group>
        {errors.city && <p>{errors.city.message}</p>}

        <Form.Group as={Col} controlId="numberOfDays">
          <Form.Label visuallyHidden="true" >Number of Days</Form.Label>
          <Controller
            name='numberOfDays'
            control={control}
            defaultValue=''
            render={({ field }) => (<Form.Control {...field} type='number' min='1' max='10' step='1'
              placeholder="Number of Days" />)}
          />
        </Form.Group>
        {errors.numberOfDays && <p>{errors.numberOfDays.message}</p>}

      </Row>
      <Row className='mb-4'>
        <Form.Group as={Col} controlId="numberOfAdults">
          <Form.Label visuallyHidden="true" >Number of Adults</Form.Label>
          <Controller
            name='numberOfAdults'
            control={control}
            defaultValue=''
            render={({ field }) => (<Form.Control {...field} type='number' min='1' max='10' step='1'
              placeholder="Number of Adults" />)}
          />
        </Form.Group>
        {errors.numberOfAdults && <p>{errors.numberOfAdults.message}</p>}
        <Form.Group as={Col} controlId="numberOfChildren">
          <Form.Label visuallyHidden="true" >Number of Children</Form.Label>
          <Controller
            name='numberOfChildren'
            control={control}
            defaultValue='0'
            render={({ field }) => (<Form.Control {...field} type='number' min='0' max='10' step='1'
              placeholder="Number of Children" />)}
          />
        </Form.Group>
        {errors.numberOfChildren && <p>{errors.numberOfChildren.message}</p>}
      </Row>
      <Button type="submit" >{loading ? "loading..." : "Find My Trip"}</Button>
    </Form>
  );
}

export default SearchForm;

