import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import './index.css'

function Settings() {


    return (
        <div className="settingsContainer">
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-label="Expand"
                    aria-controls="additional-actions1-content"
                    id="additional-actions1-header"
                >
                    <FormControlLabel
                        aria-label="Acknowledge"
                        onClick={(event) => event.stopPropagation()}
                        onFocus={(event) => event.stopPropagation()}
                        control={<Checkbox />}
                        label="I acknowledge that I should stop the click event propagation"
                    />
                </AccordionSummary>
                <AccordionDetails>
                    <Typography color="textSecondary">
                        The click event of the nested action will propagate up and expand the accordion unless
                        you explicitly stop it.
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    )

}

export default Settings;