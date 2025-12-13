<?php
echo "Rewrite Engine status: ";
if (in_array('mod_rewrite', apache_get_modules())) {
    echo "Enabled";
} else {
    echo "Disabled (Critical for .htaccess)";
}
echo "<br>";

echo "Proxy Module status: ";
if (in_array('mod_proxy', apache_get_modules())) {
    echo "Enabled";
} else {
    echo "Disabled (Critical for [P] flag)";
}
?>
