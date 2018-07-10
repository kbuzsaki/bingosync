from django.forms.widgets import Select

class GroupedSelect(Select):

    def options(self, name, value, attrs=None):
        for group in self.optgroups(name, value, attrs):
            for opt in group[1]:
                opt['attrs']['data-group'] = group[0]
                yield opt

    def get_context(self, name, value, attrs):
        context = super().get_context(name, value, attrs)
        context['widget'].pop('optgroups')
        context['widget']['optgroups'] = [(None, [x], 0) for x in self.options(name, context['widget']['value'], attrs)]
        return context
