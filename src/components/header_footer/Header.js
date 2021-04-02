import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';//css material ui
import Toolbar from '@material-ui/core/Toolbar';// css material ui check website for codes
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SideDrawer from './SideDrawer';
class Header extends Component {
    state={
        drawerOpen: false,
        headerShow:false
    }
    componentDidMount(){
        window.addEventListener('scroll',this.handleScroll);
    }
    
    handleScroll =()=>{
        if(window.scrollY > 0){
            this.setState({headerShow: true})
        }else{
            this.setState({headerShow: false})
        }
    }
    toggleDrawer = (value) => {
        this.setState({
            drawerOpen: value
        })
    }
    render() {
        return (
            <div>
            
               <AppBar 
                   position='fixed' //keep it fixed on top web page
                   style={{
                   backgroundColor:this.state.headerShow ?'#2f2f2f' : 'transparent',
                   boxShadow:'none',
                   padding: '10px 0px'// use comma to separate styles
                         }}
                >
                
                    {/*  use to add things inside AppBar */}
                    <Toolbar>
                        <div className='header_logo'>
                            <div className='font_righteous header_logo_venue'>The Venue</div>
                            <div className='header_logo_title'>MUSICAL EVENTS</div>
                        </div>
                        <IconButton 
                            aria-label='Menu'
                            color='inherit'
                            onClick={()=> this.toggleDrawer(true)}
                        >
                            <MenuIcon/>
                        </IconButton>
                        <SideDrawer
                            open={this.state.drawerOpen}
                            onClose={(value)=> this.toggleDrawer(value)}
                            />

                       
                    </Toolbar>
                         
                    
               </AppBar>
            </div>
        );
    }
}

export default Header;
