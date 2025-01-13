void main(List<String> args) {
  final n = int.parse(args[0]);

  // using string
  for (var i = 0; i < n; i++) {
    final String str = (" " * (n - i)) + ("*" * (i * 2 + 1));
    print(str);
  }

  // using array
  final List<String> array = List.filled(n * 2, " ");
  for (var i = 0; i < n; i++) {
    array[n - i] = "*";
    array[n + i] = "*";
    print(array.join());
  }
}
