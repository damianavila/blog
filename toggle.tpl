{%- extends 'html_basic.tpl' -%}

{% block output_group %}
<div class="output_hidden">
{{ super() }}
</div>
{% endblock output_group %}

{% block input %}
<div class="input_area box-flex1">
{{ cell.input | highlight2html }}
<i class="icon-hand-up icon-large" style="float:right; margin-top:8px; margin-right:10px">&nbsp;&nbsp;Click me!</i>
</div>
{%- endblock input %}
