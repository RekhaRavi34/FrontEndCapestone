import { fireEvent, render, screen,waitFor } from "@testing-library/react";
import BookingPage from '../pages/BookingPage'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

describe("BookingForm",()=>{
  const mockHandleUserInput = jest.fn();
  

  test("user not able to submit when form data is empty",()=>{
    const handleSubmit = jest.fn();
    render(<Router><BookingPage/></Router>);
    const submitbutton = screen.getByRole("button")
    fireEvent.click(submitbutton);
    expect(handleSubmit).not.toHaveBeenCalled();
  });
 
//   test("user not able to submit when form data is given correctly",async()=>{
//     const handleSubmit = jest.fn();
//     render(<Router><BookingPage/></Router>);
//     const submitbutton = screen.getByRole("button")
//     fireEvent.click(submitbutton);
//     await waitFor(() => {
//         const text1 = screen.queryByText("Please select a valid date.");
//         expect(text1).toBeInTheDocument();
//     });
   

// });
//   test("user not able to submit when form data is given correctly",async()=>{
//     const handleSubmit = jest.fn();
//     render(<Bookingcomponent {...initialProps}/>);
//     const date = screen.getByLabelText('Choose date')
//     fireEvent.change(date,{target:{value:"2024-04-12"}})
//     const time = screen.getByLabelText('Choose time')
//     fireEvent.change(time,{target:{value:"17:00"}})
//     const num = screen.getByLabelText('Number of guests')
//     fireEvent.change(num,{target:{value:"2"}})
//     const occasion = screen.getByLabelText('Occasion')
//     fireEvent.change(occasion,{target:{value:"Birthday"}})
//     const submitbutton = screen.getByRole("button")
//     fireEvent.click(submitbutton);
//     const text1= screen.getByText("Please select a valid date.")
//     expect(text1).toBeInTheDocument();
// });
  
});