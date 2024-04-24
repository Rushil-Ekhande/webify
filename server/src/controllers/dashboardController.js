export const dashboardController = async (req, res) => {
    try {
        const { user } = req;
        return res.json({
            success: true,
            message: "User is logged in",
            token: user
        })

    } catch (error) {
        console.log(error);
        return res.json({
            success: false,
            message: "unable to access dashboard"
        })
    }
}