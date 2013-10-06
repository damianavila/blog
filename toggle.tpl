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

{% block input %}
<div class="input_area box-flex1">
{{ cell.input | highlight2html }}
<i class="icon-hand-left icon-large" style="float:right; margin-top:8px; margin-right:10px"> Click me!</i>
</div>
{%- endblock input %}
