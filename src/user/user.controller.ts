import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, UploadedFile, UseInterceptors } from '@nestjs/common';
import { createUserDTO } from './Dto/create-user-dto';
import { UserService } from './user.service';
import { CloudinaryService } from 'src/cloudinary/cloudinary.service';
import { updateUserDto } from './Dto/update-user-dto';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  // Signup route
  @Post('signup')
  async signup(@Body() createUserDto: createUserDTO) {
    return this.userService.create(createUserDto);
  }

  // Login route
  @Post('login')
  async login(@Body() createLoginDto: { email: string; password: string }) {
    return this.userService.login(createLoginDto);
  }

  // Get all users
  @Get('')
  async getUsers() {
    return this.userService.getUsers();
  }

  // Get a specific user by ID
  @Get(':id')
  async getUser(@Param('id') id: string) {
    return this.userService.getUser(id);
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: string) {
    return this.userService.deleteUser(id);
  }
  @Put('update')
  async update(@Body('')updateuserdto:updateUserDto ){
    return this.userService.update(updateuserdto)
  }
 
}