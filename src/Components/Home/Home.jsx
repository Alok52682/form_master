// import SimpleForm from "../SimpleForm/SimpleForm";
// import RefForm from "../RefForm/RefForm";
// import StatefulForm from "../Statefulform/StatefulForm";

import Grandpa from "../Grandpa/Grandpa";

// import HookForm from "../HookForm/HookForm";
// import ReusableForm from "../ReuseableForm/ReuseableFrom";

const Home = () => {
    // const handleSingUpSubmit = data => {
    //     console.log('sign up data', data);
    // }

    // const handleUpdateProfile = data => {
    //     console.log('update profile', data);
    // }
    return (
        <div>
            <h1>Form Master</h1>
            <Grandpa />
            {/* <SimpleForm /> */}
            {/* <StatefulForm /> */}
            {/* <RefForm /> */}
            {/* <HookForm /> */}
            {/* <ReusableForm
                handleSubmit={handleSingUpSubmit}>
                <div>
                    <h2>Sing UP</h2>
                    <p>please sign up right now</p>
                </div>
            </ReusableForm>
            <ReusableForm
                formTitle={'Profile Update'}
                handleSubmit={handleUpdateProfile}
                submitBtnText='Update'>
                <div>
                    <h2>Update Profile</h2>
                    <p>Always keep your profile updated</p>
                </div>
            </ReusableForm> */}
        </div>
    );
};

export default Home;