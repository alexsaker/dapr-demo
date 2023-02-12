import axios from 'axios';

describe('GET /', () => {
  it('should return a message', async () => {
    const res = await axios.get(`/?latitude=43.60&longitude=7.00`);

    expect(res.status).toBe(200);
    expect(res.data).toBeDefined();
    expect(res.data['latitude']).toEqual(43.6);
    expect(res.data['longitude']).toEqual(6.9999995);
    expect(res.data['utc_offset_seconds']).toEqual(0);
    expect(res.data['timezone']).toEqual("GMT");
    expect(res.data['timezone_abbreviation']).toEqual("GMT");
    expect(res.data['elevation']).toEqual(190);
  });
});
