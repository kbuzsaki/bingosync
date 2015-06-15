import base64
import uuid

ALTERNATE_CHARACTERS = b"-_"

def encode_uuid(uuid):
    encoded_uuid = base64.b64encode(uuid.bytes, ALTERNATE_CHARACTERS).decode("utf8")
    # remove the '==' at the end
    stripped_uuid = encoded_uuid[:-2]
    return stripped_uuid

def decode_uuid(encoded_uuid):
    # re-add the '==' at the end
    encoded_uuid += "=="
    uuid_bytes = base64.b64decode(encoded_uuid.encode("utf8"), ALTERNATE_CHARACTERS)
    return uuid.UUID(bytes=uuid_bytes)
