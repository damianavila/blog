{%- extends 'html_basic.tpl' -%}

{% block output_group %}
<div class="output_hidden">
<div class="vbox output_wrapper">
<div class="output vbox">
{{ super() }}
</div>
</div>
</div>
{% endblock output_group %}
