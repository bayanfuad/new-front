import React, { useContext, useEffect, useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import '../styles/PostHolder.css';
import CommentModal from './CommentModal';
import UpdateModal from './UpdateModal';
import { dataContext } from '../contexts/DataProvider';
import { When } from 'react-if';
import cookies from 'react-cookies';
// import { FaWrench, FaTimes } from 'react-icons/fa';
import { authContext } from '../contexts/AuthProvider';
import { Button, HStack,useColorMode } from '@chakra-ui/react';

function PostHolder({ post }) {
  const { deletePost } = useContext(dataContext);
  const { canDo } = useContext(authContext);
  const [modalShow, setModalShow] = useState(false);
  const [updateModalShow, setUpdateModalShow] = useState(false);
  const { colorMode } = useColorMode();

  return (
    <>
      <div className='PostHolder'>
      <HStack>
        <div className='PostHolderTop'>
          <h4 className='PostOwner'>{post.user.username}</h4>
          <div className='editAndRemove'>
            <When condition={(cookies.load('role') === 'admin' || ((canDo() && (cookies.load('_id') === `${post.userId}`))))}>
           
              <Button className='Ebtn' onClick={() => { setUpdateModalShow(true) }}
              
              bg={colorMode === "light" ? "blue.800" : "blue.200"}
                                    color={colorMode === "light" ? "pink.200" : "pink.800"}
                                    _hover={{ bg: colorMode === "light" ? "pink.700" : "pink.300" }}
                                    ml="1rem"
              
              
              >update</Button>
            </When>
            <When condition={(cookies.load('role') === 'admin' || ((canDo() && (cookies.load('_id') === `${post.userId}`))))}>
              <Button className='Dbtn' onClick={() => { deletePost(post.id) }}
              bg={colorMode === "light" ? "blue.800" : "blue.200"}
              color={colorMode === "light" ? "pink.200" : "pink.800"}
              _hover={{ bg: colorMode === "light" ? "pink.700" : "pink.300" }}
              ml="1rem"
             
              >delete </Button>
             
            </When>
         
          </div>
        </div>
        <div className='PostHolderMid'>
          <p className='title'>{post.title}</p>
          <p className='content'>{post.content}</p>
        </div>
        </HStack>
        <div className='PostHolderBot'>
          <Button id='btn' onClick={() => { setModalShow(true) }}
     
          
          
          >Comments</Button>
        </div>
      </div>
      <CommentModal show={modalShow} post={post} onHide={() => setModalShow(false)} />
      <UpdateModal show={updateModalShow} post={post} onHide={() => setUpdateModalShow(false)} />
    </>
  )
}

export default PostHolder