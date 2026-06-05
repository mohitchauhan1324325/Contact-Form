import Contact from "../models/Contact.js";

export const saveContact = async (req, res) => {
    try {

        const {
            name,
            email,
            message
        } = req.body;

        if (!name || !email || !message) {
            return res.status(400).json({
                success: false,
                message: "All fields are required",
            });
        }

        const contact = await Contact.create({
            name,
            email,
            message,
        });

        res.status(201).json({
            success: true,
            contact,
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            success: false,
            message: error.message,
        });

    }
};

export const getContact = async (req, res) => {
    try {

        const contacts = await Contact.find()
            .sort({ createdAt: -1 })
            .lean();

        res.status(200).json({
            success: true,
            contacts,
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message,
        });

    }
};

export const deleteContact = async (req, res) => {
    try {

        const { id } = req.params;

        const contact =
            await Contact.findByIdAndDelete(id);

        if (!contact) {
            return res.status(404).json({
                success: false,
                message: "Contact not found",
            });
        }

        res.status(200).json({
            success: true,
            message: "Contact deleted successfully",
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message,
        });

    }
};