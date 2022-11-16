import styled from 'styled-components';

export const Container = styled.div`
  background: #ABC4FF;
  border-radius: 10px;

  font-family: 'Montserrat';

    .h5 {
        font-size: 1.3rem;
        font-weight: 600;
    }

    .h6 {
        font-size: 0.7rem;
        font-weight: 400;
    
        letter-spacing: 0.12rem;
    }

    .alert-danger {
        height: 30px;
        display: flex;
        margin-top: 10px;
        align-items: center;
        justify-content: center;
    }

    form {
        margin: 12px 0;
        display: flex;
        flex-direction: column;
        gap: 12px; 
            
        .text-muted {
            font-size: 0.54rem;
            letter-spacing: 0.025rem;

        }

        .form-label {
            font-size: 0.9rem;
        }
        
        .form-control {
            ::placeholder {
                color: #9B9B9B;
                font-size: 0.8rem;
            }
        }

        .btn-primary {
            margin-top: 20px;
            font-weight: 500;
        }
    
    }

    .login-push {
        cursor: pointer;
        width: fit-content;

        a {
            padding: 0.2rem 0.6rem;
            border-radius: 15px;
            display: flex;
            align-items: center;
            justify-content: center;
            width: fit-content;
            margin: 0 auto;
            text-decoration: none;
            
        }

        
        &:hover {
            a {
                background-color: #C1D3FE;
                font-weight: 500;
            }
        }


    }


`;