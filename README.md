# ================== Pro React Native Started Kit By Pravesh Kumar Pal ==================

                            <!-- Animated React Native Logo -->

                ![99070-react-native-logo](https://user-images.githubusercontent.com/100759966/215351810-b80a77f0-798a-482b-898e-db21e7ca99cc.gif)

    Many of you probably have designed and developed multiple applications already but are you using best practices in your code?

    Hello, I am a React Native developer and I’m going to tell you about the Pro folder structure for React Native here. This github repo summarizes why a properly defined folder structure is very important. You can count it as one of the best practices of writing code in React Native.

# ================== I created a react native folder structure which is as following steps- ==================

    As seen in the referenced screenshot above, At the very first I created a base folder “src” which will store all the necessary folders or files in it for the project.

                 <img width="419" alt="Screenshot 2023-01-30 at 01 09 13" src="https://user-images.githubusercontent.com/100759966/215351700-6ef2a3bb-321d-4dc0-8389-7ff57ea9a967.png">

    Note :- If you started folder name with a small letter then it should be the same for all the folder names.

1. ----------------------- api -----------------------

<!-- /services.js
The service folder contains logic, related to external API communications. -->

2.  ----------------------- assets -----------------------

    This folder will store all the assets that we are using in react-native. You can add static files like fonts and images to it. Also, you can add more assets like videos in this folder according to your project requirements.

    1. animated
    2. brands
    3. images
    4. svg

3.  ----------------------- components -----------------------

    In the components folder, you can create multiple component files that are used to wrap the application components and determine their overall layout. You can also add reusable and UI components.

4.  ----------------------- containers -----------------------
    Just as the name implies, you can put all screen-based components inside containers, such as Splash Screen, Home Screen, bottom Tabs, Sidebar, common header, and the container-based files, etc.

5.  ----------------------- helpers -----------------------

6.  ----------------------- screens -----------------------

    If you have multiple screens like auth screens: login, register and profile screens, product screens it can be saved here.

7.  ----------------------- hooks -----------------------

    You can add universal styles here like flexDirection: row, centerAll, itemsEnd and container-like equally spacing from all directions and many more. Here we place the explore feature’s components related styles.

8.  ----------------------- i18n -----------------------

    This holds translation files for different languages in which you’re using your application.

9.  ----------------------- navigation -----------------------

    Your project base navigation goes here. You can create a stack navigator and auth navigation and Main navigation in it and export it to your application.

10. ----------------------- redux -----------------------

    We are using Redux and Redux-Sagas in our project and handle business logic using them. If you are using Redux, then there must be action, reducers, saga, and services files that can be put here.

    1. types.js

       This file contains static values used within the feature. An example of what we could store here is ACTION_TYPES data.

    2. actions.js

       You can store different types of actions in this folder. The action folder contains all the calling action creators for this feature according to your project requirement.

    3. reducers.js

       Our application’s navigation data now takes a slice of the application state, we would need a reducer to properly update this sliced data based on triggered actions.

11. ----------------------- theme -----------------------

    1. fonts :- It contains global fonts like font size, font type, and font-weight. Whenever you come across situations where you need to use the same size of fonts and the same font family, you have to create a theme/font.

    2. Colors :- colors- All the colors your application using goes here. All the repeating colors, for example, your application has theme colors which are black & red so you can add primary & secondary colors like black & red. Sample code you can see below image.

12. ----------------------- utils -----------------------

    All the utils/helpers files go here that storing reusable methods and logic like validations, progress bar, date pickers, and according to your app requirements.

    This is just one way I found to be productive and better organized your code among the team, I hope it helps you too.

    Happy Programming!
