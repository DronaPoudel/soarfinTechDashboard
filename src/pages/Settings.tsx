import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Camera, ChevronDown } from 'react-feather';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const formSchema = z.object({
  yourName: z.string().min(2, 'Name is required'),
  userName: z.string().min(2, 'Username is required'),
  email: z.string().email('Please enter a valid email'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
  dateOfBirth: z.string().min(1, 'Date of birth is required'),
  presentAddress: z.string().min(5, 'Present address is required'),
  permanentAddress: z.string().min(5, 'Permanent address is required'),
  city: z.string().min(2, 'City is required'),
  postalCode: z.string().regex(/^\d+$/, 'Must be a valid postal code'),
  country: z.string().min(2, 'Country is required'),
});

type FormData = z.infer<typeof formSchema>;

const Settings = () => {
  const [activeTab, setActiveTab] = useState('Edit Profile');
  const [profileImage, setProfileImage] = useState('/placeholder.svg');
  const [birthDate, setBirthDate] = useState(new Date('1990-01-25'));

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      yourName: 'Charlene Reed',
      userName: 'Charlene Reed',
      email: 'charlenereed@gmail.com',
      password: '********',
      dateOfBirth: '25 January 1990',
      presentAddress: 'San Jose, California, USA',
      permanentAddress: 'San Jose, California, USA',
      city: 'San Jose',
      postalCode: '45962',
      country: 'USA',
    },
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen bg-[#F4F7FE]">
      <div className="max-w-[1200px] mx-auto p-6">
        {/* Tabs */}
        <div className="flex space-x-8 mb-8">
          {['Edit Profile', 'Preferences', 'Security'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-2 text-base font-medium relative ${
                activeTab === tab
                  ? 'text-[#2B3674] border-b-2 border-[#2B3674]'
                  : 'text-[#707EAE]'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {activeTab === 'Edit Profile' && (
          <div className="bg-white rounded-xl p-8">
            <div className="flex flex-col md:flex-row">
              {/* Profile Picture */}
              <div className="md:w-1/3 mb-8 md:mb-0">
                <div className="relative w-24 h-24 mx-auto">
                  <img
                    src={profileImage || "/placeholder.svg"}
                    alt="Profile"
                    className="w-24 h-24 rounded-full object-cover"
                  />
                  <label
                    htmlFor="profile-upload"
                    className="absolute bottom-0 right-0 bg-white rounded-full p-1.5 shadow-lg cursor-pointer"
                  >
                    <Camera className="h-4 w-4 text-[#2B3674]" />
                    <input
                      type="file"
                      id="profile-upload"
                      className="hidden"
                      accept="image/*"
                      onChange={handleImageUpload}
                    />
                  </label>
                </div>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit(onSubmit)} className="md:w-2/3">
                <div className="grid md:grid-cols-2 gap-x-8 gap-y-6">
                  {/* Your Name */}
                  <div>
                    <label className="block text-sm text-[#2B3674] mb-2">Your Name</label>
                    <input
                      {...register('yourName')}
                      className="w-full p-3 rounded-lg bg-[#F4F7FE] border border-gray-200 text-[#2B3674]"
                      placeholder="Enter your name"
                    />
                    {errors.yourName && (
                      <p className="mt-1 text-xs text-red-500">{errors.yourName.message}</p>
                    )}
                  </div>

                  {/* User Name */}
                  <div>
                    <label className="block text-sm text-[#2B3674] mb-2">User Name</label>
                    <input
                      {...register('userName')}
                      className="w-full p-3 rounded-lg bg-[#F4F7FE] border border-gray-200 text-[#2B3674]"
                      placeholder="Enter username"
                    />
                    {errors.userName && (
                      <p className="mt-1 text-xs text-red-500">{errors.userName.message}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm text-[#2B3674] mb-2">Email</label>
                    <input
                      {...register('email')}
                      type="email"
                      className="w-full p-3 rounded-lg bg-[#F4F7FE] border border-gray-200 text-[#2B3674]"
                      placeholder="Enter email"
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>
                    )}
                  </div>

                  {/* Password */}
                  <div>
                    <label className="block text-sm text-[#2B3674] mb-2">Password</label>
                    <input
                      {...register('password')}
                      type="password"
                      className="w-full p-3 rounded-lg bg-[#F4F7FE] border border-gray-200 text-[#2B3674]"
                      placeholder="••••••••"
                    />
                    {errors.password && (
                      <p className="mt-1 text-xs text-red-500">{errors.password.message}</p>
                    )}
                  </div>

                  {/* Date of Birth */}
                  {/* <div>
                    <label className="block text-sm text-[#2B3674] mb-2">Date of Birth</label>
                    <div className="relative">
                      <input
                        {...register('dateOfBirth')}
                        className="w-full p-3 rounded-lg bg-[#F4F7FE] border border-gray-200 text-[#2B3674] appearance-none"
                        placeholder="Select date"
                      />
                      <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#2B3674] w-4 h-4" />
                    </div>
                    {errors.dateOfBirth && (
                      <p className="mt-1 text-xs text-red-500">{errors.dateOfBirth.message}</p>
                    )}
                  </div> */}
                  <div>
    <label className="block text-sm text-[#2B3674] mb-2">Date of Birth</label>
    <DatePicker
      selected={birthDate}
      onChange={(date: any) => setBirthDate(date)}
      className="w-full p-3 rounded-lg bg-[#F4F7FE] border border-gray-200 text-[#2B3674]"
      dateFormat="dd MMMM yyyy"
    />
  </div>

                  {/* Present Address */}
                  <div>
                    <label className="block text-sm text-[#2B3674] mb-2">Present Address</label>
                    <input
                      {...register('presentAddress')}
                      className="w-full p-3 rounded-lg bg-[#F4F7FE] border border-gray-200 text-[#2B3674]"
                      placeholder="Enter present address"
                    />
                    {errors.presentAddress && (
                      <p className="mt-1 text-xs text-red-500">{errors.presentAddress.message}</p>
                    )}
                  </div>

                  {/* Permanent Address */}
                  <div>
                    <label className="block text-sm text-[#2B3674] mb-2">Permanent Address</label>
                    <input
                      {...register('permanentAddress')}
                      className="w-full p-3 rounded-lg bg-[#F4F7FE] border border-gray-200 text-[#2B3674]"
                      placeholder="Enter permanent address"
                    />
                    {errors.permanentAddress && (
                      <p className="mt-1 text-xs text-red-500">{errors.permanentAddress.message}</p>
                    )}
                  </div>

                  {/* City */}
                  <div>
                    <label className="block text-sm text-[#2B3674] mb-2">City</label>
                    <input
                      {...register('city')}
                      className="w-full p-3 rounded-lg bg-[#F4F7FE] border border-gray-200 text-[#2B3674]"
                      placeholder="Enter city"
                    />
                    {errors.city && (
                      <p className="mt-1 text-xs text-red-500">{errors.city.message}</p>
                    )}
                  </div>

                  {/* Postal Code */}
                  <div>
                    <label className="block text-sm text-[#2B3674] mb-2">Postal Code</label>
                    <input
                      {...register('postalCode')}
                      className="w-full p-3 rounded-lg bg-[#F4F7FE] border border-gray-200 text-[#2B3674]"
                      placeholder="Enter postal code"
                    />
                    {errors.postalCode && (
                      <p className="mt-1 text-xs text-red-500">{errors.postalCode.message}</p>
                    )}
                  </div>

                  {/* Country */}
                  <div>
                    <label className="block text-sm text-[#2B3674] mb-2">Country</label>
                    <input
                      {...register('country')}
                      className="w-full p-3 rounded-lg bg-[#F4F7FE] border border-gray-200 text-[#2B3674]"
                      placeholder="Enter country"
                    />
                    {errors.country && (
                      <p className="mt-1 text-xs text-red-500">{errors.country.message}</p>
                    )}
                  </div>
                </div>

                {/* Save Button */}
                <div className="mt-8 flex justify-end">
                  <button
                    type="submit"
                    className="bg-[#2B3674] text-white px-8 py-3 rounded-lg hover:bg-opacity-90 transition-colors"
                  >
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {activeTab === 'Preferences' && (
          <div className="bg-white rounded-xl p-8">
            <h2 className="text-2xl font-semibold text-[#2B3674] mb-6">Preferences</h2>
            <div className="space-y-4">
              <div>
                <label className="flex items-center">
                  <input type="checkbox" className="form-checkbox h-5 w-5 text-[#2B3674]" />
                  <span className="ml-2 text-[#2B3674]">Receive email notifications</span>
                </label>
              </div>
              <div>
                <label className="flex items-center">
                  <input type="checkbox" className="form-checkbox h-5 w-5 text-[#2B3674]" />
                  <span className="ml-2 text-[#2B3674]">Receive SMS notifications</span>
                </label>
              </div>
            
            </div>
          </div>
        )}

        {activeTab === 'Security' && (
          <div className="bg-white rounded-xl p-8">
            <h2 className="text-2xl font-semibold text-[#2B3674] mb-6">Security</h2>
            <div className="space-y-6">
              <div>
                <label className="block text-sm text-[#2B3674] mb-2">Change Password</label>
                <input
                  type="password"
                  className="w-full p-3 rounded-lg bg-[#F4F7FE] border border-gray-200 text-[#2B3674]"
                  placeholder="Enter new password"
                />
              </div>
              <div>
                <label className="block text-sm text-[#2B3674] mb-2">Confirm New Password</label>
                <input
                  type="password"
                  className="w-full p-3 rounded-lg bg-[#F4F7FE] border border-gray-200 text-[#2B3674]"
                  placeholder="Confirm new password"
                />
              </div>
              <div>
                <label className="flex items-center">
                  <input type="checkbox" className="form-checkbox h-5 w-5 text-[#2B3674]" />
                  <span className="ml-2 text-[#2B3674]">Enable two-factor authentication</span>
                </label>
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  className="bg-[#2B3674] text-white px-8 py-3 rounded-lg hover:bg-opacity-90 transition-colors"
                >
                  Update Security Settings
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Settings;