//Below you may find answers... but do you want them?

window.enter = false;
window.lastindex = 0;
window.focused = true;
window.key1 = false;
window.key2 = false;
window.key3 = false;

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

window.onload = async function bootup() {
    await sleep(1000);

    var i;
    for (i = 0; i < bootscript.length; i++) {
        var wait = waittimes[Math.floor(Math.random() * waittimes.length)];
        var message = document.getElementById("bootmessage");
        var page = document.getElementById("page");

        message.innerHTML += bootscript[i].slice(0, 2) + "<span class='green'>" + bootscript[i].slice(3, 12) + "</span>" + bootscript[i].slice(13) + "<br>";
        page.scrollTop = page.scrollHeight;
        await sleep(wait);
    }

    await sleep(1000);
    var typespace = document.getElementById("typespace");
    typespace.classList.toggle("show");
    
    listen();
    reset();
    while (1 == 1) {
      if (window.enter == true) {
        listen();
        reset();
        window.enter = false;
      }
      await sleep(200);
    }
}

var responsegen = function(string) {
  return `
  <br>
  <p id="typespace" class="response">` + string + `</p>
  `;
}

var reset = function() {

  document.getElementById("listen").addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
      var page = document.getElementById("page");
      var userinput = document.getElementById("line");
      var inputvalue = userinput.innerHTML;
      var command = document.getElementById("command").innerHTML; + "</span>"

      if (command == "help") {
        command += responsegen(`
        Available commands:<br>
        -help: get all available commands<br>
        -recovery: recover computer password<br>
        -key: use a key for password recovery<br>
        -hint: get hint for finding a key<br>
        -sequence: run sequence cracker
        `);
      } else if (command == "recovery") {
        if (window.key1 == false || window.key2 == false || window.key3 == false) {
          command += responsegen(`
          In order to recover password, all three keys must be found!<br>
          <br>
          Found a key? Use this command for each key you find:<br>
          key [key number] [key value]<br>
          <br>
          For example, if you knew key 2, and it was JUMP:<br>
          key 2 JUMP
          `);
        } else {
          command += responsegen("Your password is: PASSWORD123");
        }
      } else if (command.substr(0, 3) == "key") {
        if (command.charAt(4) == "1") {
          if (command.substr(6).toUpperCase() == "PIGEON") {
            command += responsegen("Key 1 Unlocked.");
            window.key1 = true;
          } else {
            command += responsegen("Key is incorrect.");
          }
        } else if (command.charAt(4) == "2") {
          if (command.substr(6).toUpperCase() == "NOODLE") {
            command += responsegen("Key 2 Unlocked.");
            window.key2 = true;
          } else {
            command += responsegen("Key is incorrect.");
          }
        } else if (command.charAt(4) == "3") {
          if (command.substr(6).toUpperCase() == "SKATEBOARD") {
            command += responsegen("Key 3 Unlocked.");
            window.key3 = true;
          } else {
            command += responsegen("Key is incorrect.")
          }
        } else {
          command += responsegen(`
          Please use the correct format.<br>
          <br>
          Found a key? Use this command for each key you find:<br>
          key [key number] [key value]<br>
          <br>
          For example, if you knew key 2, and it was JUMP:<br>
          key 2 JUMP
          `);
        }
      } else if (command.substr(0, 4) == "hint") {
        if (command.charAt(5) == "1") {
          command += responsegen("Hint for key 1: Lauren's puzzle");
        } else if (command.charAt(5) == "2") {
          command += responsegen("Hint for key 2: Hangman");
        } else if (command.charAt(5) == "3") {
          command += responsegen("Hint for key 3: Follow the leader")
        } else {
          command += responsegen(`
          Please use the correct format<br>
          <br>
          To receive a hint, use this commmand:<br>
          hint [key number]<br>
          <br>
          For example, to receive a hint about key 2, use:<br>
          hint 2
          `);
        }
      } else if (command == "sequence") {
        command += responsegen("Starting....")
        startkey3()
      } else {
        command += responsegen("Unknown command, use 'help' for list of all commands.");
      }

      var end = inputvalue.indexOf('$</span>', window.lastindex) + 8;
      window.lastindex = end;
      userinput.innerHTML = inputvalue.slice(0, end) + "</p><span id='cmd-old'>" + command + `</span>
      <br>
      <p id="typespace" class="username show"><span class="lightgreen">chen@seattlechildrens</span>:<span class="blue"> ~ $</span></p>
      <span id="cmd">
        <span id="command"></span>
        <div id="cursor"></div>
      </span>
      <input id="listen" type="text" value=""/>
      `;
      page.scrollTop = page.scrollHeight;
      window.enter = true;
    }
  })
}

var random = function () {
  return Math.floor(Math.random() * (5 - 1) + 1);
}

var playkey3 = async function() {
  // stop other functions
  document.getElementById("start").onclick = "";
  var leader = document.getElementById("leader");

  // flash leader
  var colors = []
  for (var i = 0; i < 4; i++) {
    colors.push(random())
  }

  for (var i = 0; i < colors.length; i++) {
    if (colors[i] == 1) {
      leader.classList.add("red-button-ready");
      await sleep(1500);
      leader.classList.remove("red-button-ready");
      await sleep(200);
    } else if (colors[i] == 2) {
      leader.classList.add("blue-button-ready");
      await sleep(1500);
      leader.classList.remove("blue-button-ready");
      await sleep(200);
    } else if (colors[i] == 3) {
      leader.classList.add("green-button-ready");
      await sleep(1500);
      leader.classList.remove("green-button-ready");
      await sleep(200);
    } else {
      leader.classList.add("yellow-button-ready");
      await sleep(1500);
      leader.classList.remove("yellow-button-ready");
      await sleep(200);
    }
  }

  var c = document.getElementsByClassName("color");
  for (var i = 0; i < c.length; i++) {
    if (c[i].id == "red") {
      c[i].classList.remove("red-button");
      c[i].classList.add("red-button-ready");
    } else if (c[i].id == "blue") {
      c[i].classList.remove("blue-button");
      c[i].classList.add("blue-button-ready");
    } else if (c[i].id == "green") {
      c[i].classList.remove("green-button");
      c[i].classList.add("green-button-ready");
    } else {
      c[i].classList.remove("yellow-button");
      c[i].classList.add("yellow-button-ready");
    }
  }

  var red = document.getElementById("red");
  var blue = document.getElementById("blue");
  var green = document.getElementById("green");
  var yellow = document.getElementById("yellow");
  var response = [];
  var responsecheck = [];

  red.addEventListener("click", function() {
    var l = response.push(1);
    if (response[l - 1] == colors[l - 1]) {
      responsecheck.push(true);
    } else {
      responsecheck.push(false);
    }
    if (l == colors.length) {
      if (responsecheck.includes(false)) {
        document.getElementById("ans").innerHTML = "Code not successfully sequenced.";
      } else {
        document.getElementById("ans").innerHTML = "Code sequenced: Key 3 is SKATEBOARD";
      }
    }
  });
  blue.addEventListener("click", function() {
    var l = response.push(2);
    if (response[l - 1] == colors[l - 1]) {
      responsecheck.push(true);
    } else {
      responsecheck.push(false);
    }
    if (l == colors.length) {
      if (responsecheck.includes(false)) {
        document.getElementById("ans").innerHTML = "Code not successfully sequenced.";
      } else {
        document.getElementById("ans").innerHTML = "Code sequenced: Key 3 is SKATEBOARD";
      }
    }
  });
  green.addEventListener("click", function() {
    var l = response.push(3);
    if (response[l - 1] == colors[l - 1]) {
      responsecheck.push(true);
    } else {
      responsecheck.push(false);
    }
    if (l == colors.length) {
      if (responsecheck.includes(false)) {
        document.getElementById("ans").innerHTML = "Code not successfully sequenced.";
      } else {
        document.getElementById("ans").innerHTML = "Code sequenced: Key 3 is SKATEBOARD";
      }
    }
  });
  yellow.addEventListener("click", function() {
    var l = response.push(4);
    if (response[l - 1] == colors[l - 1]) {
      responsecheck.push(true);
    } else {
      responsecheck.push(false);
    }
    if (l == colors.length) {
      if (responsecheck.includes(false)) {
        document.getElementById("ans").innerHTML = "Code not successfully sequenced.";
      } else {
        document.getElementById("ans").innerHTML = "Code sequenced: Key 3 is SKATEBOARD";
      }
    }
  });
}

var startkey3 = function() {
  document.getElementById("key3").classList.add("show-block");
}

var closekey3 = function() {
  document.getElementById("key3").classList.remove("show-block");
}

var listen = function () {
  var cursor;

  $('input').focus();
  cursor = window.setInterval(function() {
    if ($('#cursor').css('visibility') === 'visible') {
      $('#cursor').css({
        visibility: 'hidden'
      });
    } else {
      $('#cursor').css({
        visibility: 'visible'
      });
    }
  }, 500);

  $('#cmd').click(function() {
    if (window.focused == false) {
      $('input').focus();
      cursor = window.setInterval(function() {
        if ($('#cursor').css('visibility') === 'visible') {
          $('#cursor').css({
            visibility: 'hidden'
          });
        } else {
          $('#cursor').css({
            visibility: 'visible'
          });
        }
      }, 500);
      window.focused = true;
    }
  });

  $('input').keyup(function() {
    $('#cmd span').text($(this).val());
  });

  $('input').blur(function() {
    clearInterval(cursor);
    $('#cursor').css({
      visibility: 'visible'
    });
    window.focused = false;
  });
}

var waittimes = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 5, 5, 5, 100, 500]

var bootscript = `
[    0.000000] Booting Linux on physical CPU 0x0
[    0.000000] Initializing cgroup subsys cpu
[    0.000000] Initializing cgroup subsys cpuacct
[    0.000000] Linux version 3.18.9 (lgh@lgh-ThinkPad-X200) (gcc version 4.7.1 20120402 (prerelease) (crosstool-NG 1.15.2) ) #68 PREEMPT Mon Jun 29 02:49:10 CST 2015
[    0.000000] CPU: ARMv6-compatible processor [410fb767] revision 7 (ARMv7), cr=00c5387d
[    0.000000] CPU: PIPT / VIPT nonaliasing data cache, VIPT nonaliasing instruction cache
[    0.000000] Machine: BCM2708
[    0.000000] cma: Reserved 8 MiB at 0x0f800000
[    0.000000] Memory policy: Data cache writeback
[    0.000000] On node 0 totalpages: 65536
[    0.000000] free_area_init_node: node 0, pgdat c083f75c, node_mem_map cf5f4000
[    0.000000]   Normal zone: 512 pages used for memmap
[    0.000000]   Normal zone: 0 pages reserved
[    0.000000]   Normal zone: 65536 pages, LIFO batch:15
[    0.000000] pcpu-alloc: s0 r0 d32768 u32768 alloc=1*32768
[    0.000000] pcpu-alloc: [0] 0
[    0.000000] Built 1 zonelists in Zone order, mobility grouping on.  Total pages: 65024
[    0.000000] Kernel command line: dma.dmachans=0x7f35 bcm2708_fb.fbwidth=480 bcm2708_fb.fbheight=320 bcm2708.boardrev=0x100000d bcm2708.serial=0x75f637e1 smsc95xx.macaddr=B8:27:EB:F6:37:E1 bcm2708_fb.fbswap=1 sdhci-bcm2708.emmc_clock_freq=250000000 vc_mem.mem_base=0x1ec00000 vc_mem.mem_size=0x20000000  dwc_otg.lpm_enable=0 console=ttyAMA0,115200 kgdboc=ttyAMA0,115200 console=tty1 root=/dev/mmcblk0p2 rootfstype=ext4 elevator=deadline rootwait
[    0.000000] PID hash table entries: 1024 (order: 0, 4096 bytes)
[    0.000000] Dentry cache hash table entries: 32768 (order: 5, 131072 bytes)
[    0.000000] Inode-cache hash table entries: 16384 (order: 4, 65536 bytes)
[    0.000000] Memory: 242428K/262144K available (5868K kernel code, 357K rwdata, 1876K rodata, 340K init, 734K bss, 19716K reserved)
[    0.000000] Virtual kernel memory layout:
[    0.000000]     vector  : 0xffff0000 - 0xffff1000   (   4 kB)
[    0.000000]     fixmap  : 0xffc00000 - 0xffe00000   (2048 kB)
[    0.000000]     vmalloc : 0xd0800000 - 0xff000000   ( 744 MB)
[    0.000000]     lowmem  : 0xc0000000 - 0xd0000000   ( 256 MB)
[    0.000000]     modules : 0xbf000000 - 0xc0000000   (  16 MB)
[    0.000000]       .text : 0xc0008000 - 0xc0798244   (7745 kB)
[    0.000000]       .init : 0xc0799000 - 0xc07ee000   ( 340 kB)
[    0.000000]       .data : 0xc07ee000 - 0xc084764c   ( 358 kB)
[    0.000000]        .bss : 0xc084764c - 0xc08fef78   ( 735 kB)
[    0.000000] SLUB: HWalign=32, Order=0-3, MinObjects=0, CPUs=1, Nodes=1
[    0.000000] Preemptible hierarchical RCU implementation.
[    0.000000] NR_IRQS:522
[    0.000023] sched_clock: 32 bits at 1000kHz, resolution 1000ns, wraps every 2147483648000ns
[    0.000070] Switching to timer-based delay loop, resolution 1000ns
[    0.000358] Console: colour dummy device 80x30
[    0.001644] console [tty1] enabled
[    0.001694] Calibrating delay loop (skipped), value calculated using timer frequency.. 2.00 BogoMIPS (lpj=10000)
[    0.001778] pid_max: default: 32768 minimum: 301
[    0.002159] Mount-cache hash table entries: 1024 (order: 0, 4096 bytes)
[    0.002232] Mountpoint-cache hash table entries: 1024 (order: 0, 4096 bytes)
[    0.003269] Initializing cgroup subsys memory
[    0.003365] Initializing cgroup subsys devices
[    0.003427] Initializing cgroup subsys freezer
[    0.003484] Initializing cgroup subsys net_cls
[    0.003537] Initializing cgroup subsys blkio
[    0.003663] CPU: Testing write buffer coherency: ok
[    0.003781] ftrace: allocating 19584 entries in 58 pages
[    0.108811] Setting up static identity map for 0x54d4e8 - 0x54d544
[    0.111668] devtmpfs: initialized
[    0.129303] VFP support v0.3: implementor 41 architecture 1 part 20 variant b rev 5
[    0.132583] pinctrl core: initialized pinctrl subsystem
[    0.133516] NET: Registered protocol family 16
[    0.139159] DMA: preallocated 4096 KiB pool for atomic coherent allocations
[    0.168604] cpuidle: using governor ladder
[    0.198664] cpuidle: using governor menu
[    0.199377] bcm2708.uart_clock = 3000000
[    0.199454] of_platform_populate failed: -22
[    0.202528] hw-breakpoint: found 6 breakpoint and 1 watchpoint registers.
[    0.202597] hw-breakpoint: maximum watchpoint size is 4 bytes.
[    0.202673] mailbox: Broadcom VideoCore Mailbox driver
[    0.202828] bcm2708_vcio: mailbox at f200b880
[    0.203339] bcm_power: Broadcom power driver
[    0.203400] bcm_power_open() -> 0
[    0.203432] bcm_power_request(0, 8)
[    0.229144] bcm_mailbox_read -> 00000080, 0
[    0.229191] bcm_power_request -> 0
[    0.229404] Serial: AMBA PL011 UART driver
[    0.229645] dev:f1: ttyAMA0 at MMIO 0x20201000 (irq = 83, base_baud = 0) is a PL011 rev3
[    0.618653] console [ttyAMA0] enabled
[    0.681960] SCSI subsystem initialized
[    0.686041] usbcore: registered new interface driver usbfs
[    0.691848] usbcore: registered new interface driver hub
[    0.697353] usbcore: registered new device driver usb
[    0.704691] Switched to clocksource stc
[    0.736743] FS-Cache: Loaded
[    0.740060] CacheFiles: Loaded
[    0.760424] NET: Registered protocol family 2
[    0.766411] TCP established hash table entries: 2048 (order: 1, 8192 bytes)
[    0.773480] TCP bind hash table entries: 2048 (order: 1, 8192 bytes)
[    0.780125] TCP: Hash tables configured (established 2048 bind 2048)
[    0.786662] TCP: reno registered
[    0.789932] UDP hash table entries: 256 (order: 0, 4096 bytes)
[    0.795871] UDP-Lite hash table entries: 256 (order: 0, 4096 bytes)
[    0.802571] NET: Registered protocol family 1
[    0.807678] RPC: Registered named UNIX socket transport module.
[    0.813652] RPC: Registered udp transport module.
[    0.818497] RPC: Registered tcp transport module.
[    0.823233] RPC: Registered tcp NFSv4.1 backchannel transport module.
[    0.831162] bcm2708_dma: DMA manager at f2007000
[    0.836182] bcm2708_gpio: bcm2708_gpio_probe c07fcd30
[    0.841869] vc-mem: phys_addr:0x00000000 mem_base=0x1ec00000 mem_size:0x20000000(512 MiB)
[    0.851824] futex hash table entries: 256 (order: -1, 3072 bytes)
[    0.858334] audit: initializing netlink subsys (disabled)
[    0.863868] audit: type=2000 audit(0.630:1): initialized
[    0.884963] VFS: Disk quotas dquot_6.5.2
[    0.889327] Dquot-cache hash table entries: 1024 (order 0, 4096 bytes)
[    0.898848] FS-Cache: Netfs 'nfs' registered for caching
[    0.905996] NFS: Registering the id_resolver key type
[    0.911168] Key type id_resolver registered
[    0.915507] Key type id_legacy registered
[    0.920930] msgmni has been set to 489
[    0.927379] Block layer SCSI generic (bsg) driver version 0.4 loaded (major 252)
[    0.935413] io scheduler noop registered
[    0.939404] io scheduler deadline registered (default)
[    0.945188] io scheduler cfq registered
[    1.255430] input: KeDei.taobao.com as /devices/virtual/input/input0
[    1.465442] Console: switching to colour frame buffer device 60x40
[    1.478983] bcm2708-dmaengine bcm2708-dmaengine: Load BCM2835 DMA engine driver
[    1.491162] uart-pl011 dev:f1: no DMA platform data
[    1.504850] kgdb: Registered I/O driver kgdboc.
[    1.535596] vc-cma: Videocore CMA driver
[    1.541757] vc-cma: vc_cma_base      = 0x00000000
[    1.564772] vc-cma: vc_cma_size      = 0x00000000 (0 MiB)
[    1.572400] vc-cma: vc_cma_initial   = 0x00000000 (0 MiB)
[    1.616793] brd: module loaded
[    1.641021] loop: module loaded
[    1.655317] vchiq: vchiq_init_state: slot_zero = 0xcf800000, is_master = 0
[    1.675530] Loading iSCSI transport class v2.0-870.
[    1.695597] usbcore: registered new interface driver smsc95xx
[    1.714823] dwc_otg: version 3.00a 10-AUG-2012 (platform bus)
[    2.135014] Core Release: 2.80a
[    2.140415] Setting default values for core params
[    2.164765] Finished setting default values for core params
[    2.584726] Using Buffer DMA mode
[    2.590359] Periodic Transfer Interrupt Enhancement - disabled
[    2.614733] Multiprocessor Interrupt Enhancement - disabled
[    2.634737] OTG VER PARAM: 0, OTG VER FLAG: 0
[    2.641447] Dedicated Tx FIFOs mode
[    2.656256] WARN::dwc_otg_hcd_init:1047: FIQ DMA bounce buffers: virt = 0xcfc04000 dma = 0x4fc04000 len=9024
[    2.684745] FIQ FSM acceleration enabled for :
[    2.684745] Non-periodic Split Transactions
[    2.684745] Periodic Split Transactions
[    2.684745] High-Speed Isochronous Endpoints
[    2.744734] dwc_otg: Microframe scheduler enabled
[    2.744869] WARN::hcd_init_fiq:412: FIQ on core 0 at 0xc03f4988
[    2.755165] WARN::hcd_init_fiq:413: FIQ ASM at 0xc03f4c38 length 36
[    2.765907] WARN::hcd_init_fiq:438: MPHI regs_base at 0xd085c000
[    2.804742] dwc_otg bcm2708_usb: DWC OTG Controller
[    2.812083] dwc_otg bcm2708_usb: new USB bus registered, assigned bus number 1
[    2.844815] dwc_otg bcm2708_usb: irq 32, io mem 0x00000000
[    2.864769] Init: Port Power? op_state=1
[    2.871048] Init: Power Port (0)
[    2.885143] usb usb1: New USB device found, idVendor=1d6b, idProduct=0002
[    2.914744] usb usb1: New USB device strings: Mfr=3, Product=2, SerialNumber=1
[    2.934754] usb usb1: Product: DWC OTG Controller
[    2.941858] usb usb1: Manufacturer: Linux 3.18.9 dwc_otg_hcd
[    2.964743] usb usb1: SerialNumber: bcm2708_usb
[    2.985627] hub 1-0:1.0: USB hub found
[    2.994834] hub 1-0:1.0: 1 port detected
[    3.015374] dwc_otg: FIQ enabled
[    3.015398] dwc_otg: NAK holdoff enabled
[    3.015410] dwc_otg: FIQ split-transaction FSM enabled
[    3.015472] Module dwc_common_port init
[    3.016049] usbcore: registered new interface driver usb-storage
[    3.035428] mousedev: PS/2 mouse device common for all mice
[    3.055584] bcm2835-cpufreq: min=700000 max=700000
[    3.075090] sdhci: Secure Digital Host Controller Interface driver
[    3.094728] sdhci: Copyright(c) Pierre Ossman
[    3.101814] DMA channels allocated for the MMC driver
[    3.154753] Load BCM2835 MMC driver
[    3.163392] sdhci-pltfm: SDHCI platform and OF driver helper
[    3.207395] ledtrig-cpu: registered to indicate activity on CPUs
[    3.235132] hidraw: raw HID events driver (C) Jiri Kosina
[    3.255271] usbcore: registered new interface driver usbhid
[    3.267756] usbhid: USB HID core driver
[    3.280858] mmc0: host does not support reading read-only switch, assuming write-enable
[    3.294362] TCP: cubic registered
[    3.314763] Initializing XFRM netlink socket
[    3.321578] NET: Registered protocol family 17
[    3.332502] mmc0: new high speed SDHC card at address e624
[    3.355014] Key type dns_resolver registered
[    3.363462] mmcblk0: mmc0:e624 SU08G 7.40 GiB
[    3.371521] registered taskstats version 1
[    3.386089] vc-sm: Videocore shared memory driver
[    3.393510]  mmcblk0: p1 p2
[    3.414842] [vc_sm_connected_init]: start
[    3.425374] [vc_sm_connected_init]: end - returning 0
[    3.480806] EXT4-fs (mmcblk0p2): mounted filesystem with ordered data mode. Opts: (null)
[    3.514803] VFS: Mounted root (ext4 filesystem) on device 179:2.
[    3.535858] devtmpfs: mounted
[    3.542147] Freeing unused kernel memory: 340K (c0799000 - c07ee000)
[    5.519695] Indeed it is in host mode hprt0 = 00021501
[    5.764980] usb 1-1: new high-speed USB device number 2 using dwc_otg
[    5.785068] Indeed it is in host mode hprt0 = 00001101
[    6.125363] usb 1-1: New USB device found, idVendor=0424, idProduct=9512
[    6.164826] usb 1-1: New USB device strings: Mfr=0, Product=0, SerialNumber=0
[    6.206189] hub 1-1:1.0: USB hub found
[    6.212557] hub 1-1:1.0: 3 ports detected
[    6.697993] udevd[159]: starting version 175
[    6.719148] random: nonblocking pool is initialized
[    8.225767] bcm2708_i2c bcm2708_i2c.1: could not get IRQ
[    9.305020] usb 1-1.1: new high-speed USB device number 3 using dwc_otg
[    9.445447] usb 1-1.1: New USB device found, idVendor=0424, idProduct=ec00
[    9.485361] usb 1-1.1: New USB device strings: Mfr=0, Product=0, SerialNumber=0
[    9.525812] smsc95xx v1.0.4
[    9.596608] smsc95xx 1-1.1:1.0 eth0: register 'smsc95xx' at usb-bcm2708_usb-1.1, smsc95xx USB 2.0 Ethernet, b8:27:eb:f6:37:e1
[    9.735024] usb 1-1.2: new high-speed USB device number 4 using dwc_otg
[    9.879394] usb 1-1.2: New USB device found, idVendor=0930, idProduct=6528
[    9.919864] usb 1-1.2: New USB device strings: Mfr=0, Product=2, SerialNumber=3
[    9.964826] usb 1-1.2: Product: DataTraveler 2.0
[    9.972196] usb 1-1.2: SerialNumber: 0781396090016A8B
[   10.003228] usb-storage 1-1.2:1.0: USB Mass Storage device detected
[   11.085076] scsi host0: usb-storage 1-1.2:1.0
[   11.175006] usb 1-1.3: new full-speed USB device number 5 using dwc_otg
[   11.350548] usb 1-1.3: New USB device found, idVendor=0a12, idProduct=0001
[   11.381179] usb 1-1.3: New USB device strings: Mfr=0, Product=0, SerialNumber=0
[   12.321500] usbcore: registered new interface driver uas
[   12.499357] Bluetooth: Core ver 2.19
[   12.524898] NET: Registered protocol family 31
[   12.532131] Bluetooth: HCI device and connection manager initialized
[   12.684874] Bluetooth: HCI socket layer initialized
[   12.692514] Bluetooth: L2CAP socket layer initialized
[   12.816163] Bluetooth: SCO socket layer initialized
[   12.896791] usbcore: registered new interface driver btusb
[   13.180166] scsi 0:0:0:0: Direct-Access     Kingston DataTraveler 2.0 5.00 PQ: 0 ANSI: 0 CCS
[   13.365681] sd 0:0:0:0: Attached scsi generic sg0 type 0
[   13.404950] sd 0:0:0:0: [sda] 1005568 512-byte logical blocks: (514 MB/491 MiB)
[   13.436638] sd 0:0:0:0: [sda] Write Protect is off
[   13.444163] sd 0:0:0:0: [sda] Mode Sense: 23 00 00 00
[   13.454839] sd 0:0:0:0: [sda] No Caching mode page found
[   13.462783] sd 0:0:0:0: [sda] Assuming drive cache: write through
[   13.503115]  sda: sda1
[   13.527357] sd 0:0:0:0: [sda] Attached SCSI removable disk
[   16.046238] FAT-fs (sda1): Volume was not properly unmounted. Some data may be corrupt. Please run fsck.
[   19.737290] EXT4-fs (mmcblk0p2): re-mounted. Opts: (null)
[   20.914831] EXT4-fs (mmcblk0p2): re-mounted. Opts: (null)
[   31.984316] smsc95xx 1-1.1:1.0 eth0: hardware isn't capable of remote wakeup
[   33.636783] smsc95xx 1-1.1:1.0 eth0: link up, 100Mbps, full-duplex, lpa 0xC5E1
[   40.533801] Adding 102396k swap on /var/swap.  Priority:-1 extents:1 across:102396k SSFS
[   40.840502] Bluetooth: BNEP (Ethernet Emulation) ver 1.3
[   40.840540] Bluetooth: BNEP filters: protocol multicast
[   40.840594] Bluetooth: BNEP socket layer initialized
[   40.935356] Bluetooth: RFCOMM TTY layer initialized
[   40.935432] Bluetooth: RFCOMM socket layer initialized
[   40.935489] Bluetooth: RFCOMM ver 1.11`.split("\n");
