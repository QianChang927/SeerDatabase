package com.robot.module.app
{
   import com.robot.app.petbag.PetBagControllerNew;
   import com.robot.app.task.petstory.util.BtnClick;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app2.control.activityHelper.ActivityModel;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.config.xml.CountermarkXMLInfo;
   import com.robot.core.config.xml.ElfAwakeningNewXmlInfo;
   import com.robot.core.config.xml.GoldProductXMLInfo;
   import com.robot.core.config.xml.ItemXMLInfo;
   import com.robot.core.config.xml.PetAdvanceNewXMLInfo;
   import com.robot.core.config.xml.PetBookXMLInfo;
   import com.robot.core.config.xml.PetSkinXMLInfo;
   import com.robot.core.config.xml.PetXMLInfo;
   import com.robot.core.config.xml.SkillXMLInfo;
   import com.robot.core.config.xml.SuitXMLInfo;
   import com.robot.core.config.xmlInfo.PetSkinInfo;
   import com.robot.core.controller.ElfAwakeningNewController;
   import com.robot.core.controller.RedSystemController;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.info.userItem.SingleItemInfo;
   import com.robot.core.manager.ItemManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.PetManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.ui.alert.Alarm;
   import com.robot.core.ui.itemTip.ItemInfoTip;
   import com.robot.core.uic.UIScrollBarX;
   import com.robot.core.utils.CommonUI;
   import flash.display.DisplayObject;
   import flash.display.DisplayObjectContainer;
   import flash.display.MovieClip;
   import flash.display.Sprite;
   import flash.events.MouseEvent;
   import flash.geom.Point;
   import flash.text.TextField;
   import flash.utils.ByteArray;
   import org.taomee.ds.HashMap;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.EventManager;
   import org.taomee.manager.ResourceManager;
   import org.taomee.manager.ToolTipManager;
   import org.taomee.utils.DisplayUtil;
   
   public class ElfAwakeningNewFightPanel extends ActivityModel
   {
      private var isOld:Boolean;
      
      private var scrollBar:UIScrollBarX;
      
      private var _selectIdx:int;
      
      private var gkNum:int;
      
      private var infos:Array;
      
      private var curInfos:Array;
      
      private var awakeningId:int;
      
      private var bossBuffs:Array;
      
      private var awakeningInfo:Object;
      
      private var bossLevelInfo:Object;
      
      private var _selectArr:Array;
      
      private var showIdx:int = -1;
      
      private var levelStates:HashMap;
      
      private var bossStates:HashMap;
      
      private var itemNum:int;
      
      private var jxOver:Boolean;
      
      private var leftTime:int;
      
      private var levelIdx:int;
      
      private var serverSelect:Array;
      
      private var _bossFightIdx:int = -1;
      
      private var lastAwakenOpenState:int = -1;
      
      private var selectLevelInfo:Object;
      
      private var curPlus:int;
      
      private var itemMcs:Array;
      
      public function ElfAwakeningNewFightPanel()
      {
         super();
         resUrl = "2024/1129/ElfAwakeningNewFightPanel";
         configUrl = "2024/1129/ElfAwakeningNew";
      }
      
      override public function init(data:Object = null) : void
      {
         super.init(data);
         if(data is int)
         {
            this.awakeningId = int(data);
         }
         else if(data is Object)
         {
            this.awakeningId = data.id;
            this.showIdx = data.boss;
            this.lastAwakenOpenState = data.state;
            this._bossFightIdx = data.idx;
         }
      }
      
      private function superShow() : void
      {
         var tmpPid:int = 0;
         var i4:int = 0;
         super.show();
         EventManager.addEventListener("ElfAwakeningNewTaskRefresh",this.updateItem);
         EventManager.addEventListener(RedSystemController.RED_UPDATED,this.updateRed);
         this.updateRed();
         this.serverSelect = [];
         this.awakeningInfo = ElfAwakeningNewXmlInfo.getInfoByAid(this.awakeningId);
         this.isOld = this.awakeningInfo.awakentype == 2;
         this.bossBuffs = ElfAwakeningNewXmlInfo.getBossBuffsByAId(this.awakeningId);
         this.infos = ElfAwakeningNewXmlInfo.getLevelsInfoByAid(this.awakeningId);
         this.bossLevelInfo = ElfAwakeningNewXmlInfo.getBossInfoByAid(this.awakeningId);
         _ui["sub"].visible = false;
         _ui["sub1"].visible = false;
         _ui["sub2"].visible = false;
         _ui["sub3"].visible = false;
         _ui["task"].visible = false;
         _ui["btn1"].visible = false;
         _ui["red_0"].visible = false;
         this.scrollBar = new UIScrollBarX(ui["mc"]["bar"]["slider"],ui["mc"]["bar"]["track"],1,ui["mc"]["bar"]["upArrow"],ui["mc"]["bar"]["downArrow"]);
         this.scrollBar.wheelObject = ui["mc"];
         this.scrollBar.addEventListener(MouseEvent.MOUSE_MOVE,this.onScrollMove);
         this.selectIdx = 1;
         for(var j:int = 0; j < 8; j++)
         {
            _ui["sub2"]["item_" + j].gotoAndStop(1);
            _ui["sub2"]["item_" + j]["des"].text = this.bossBuffs[j].des;
            _ui["sub2"]["item_" + j]["valueTxt"].text = (this.bossBuffs[j].bufftype == 1 ? "-" : "+") + this.bossBuffs[j].extranum + "%";
            _ui["sub2"]["item_" + j]["title"].gotoAndStop(j + 1);
         }
         _ui["mc"]["zr"].visible = false;
         _ui["mc"]["zr"].mouseChildren = _ui["mc"]["zr"].mouseEnabled = false;
         this.selectArr = [];
         _ui["time"]["txt"].text = ElfAwakeningNewXmlInfo.getTimeDes(this.awakeningId);
         _ui["time"]["txt"].visible = !this.isOld;
         _ui["tipMc"].visible = false;
         _ui["tipMc"].mouseChildren = _ui["tipMc"].mouseEnabled = false;
         eventCom.addRollOverEvent(_ui["limitInfo"],this.limitInfoOverHandle);
         eventCom.addRollOutEvent(_ui["limitInfo"],this.limitInfoOutHandle);
         var limitPet:Array = this.awakeningInfo.limitid.split(";");
         for(var i2:int = 0; i2 < 3; i2++)
         {
            if(i2 < limitPet.length)
            {
               tmpPid = parseInt(limitPet[i2]);
               _ui["tipMc"]["icon_" + i2]["con"].cid = tmpPid;
               this.loadMonster(tmpPid,0,_ui["tipMc"]["icon_" + i2]["con"]);
               _ui["tipMc"]["pName_" + i2].text = PetXMLInfo.getName(tmpPid);
            }
            else
            {
               _ui["tipMc"]["pName_" + i2].text = "";
               DisplayUtil.removeAllChild(_ui["tipMc"]["icon_" + i2]["con"]);
            }
         }
         for(var i3:int = 0; i3 < 4; i3++)
         {
            eventCom.addRollOverEvent(_ui["mc"]["mc_" + i3]["tgBtn"],this.showTgPetHandle);
            eventCom.addRollOutEvent(_ui["mc"]["mc_" + i3]["tgBtn"],this.hideTgPetHandle);
         }
         eventCom.addRollOverEvent(_ui["mc"]["bossMc"]["bossTg"],this.bossTgPetHandle);
         eventCom.addRollOutEvent(_ui["mc"]["bossMc"]["bossTg"],this.hideBossTgPetHandle);
         _ui["icon"]["con"].cid = this.awakeningInfo.itemurl;
         this.loadItem(this.awakeningInfo.itemurl,_ui["icon"]["con"],1,1,30,30);
         _ui["tip1"].visible = false;
         eventCom.addRollOverEvent(_ui["jxMoney"],this.showTip1Handle);
         eventCom.addRollOutEvent(_ui["jxMoney"],this.hideTip1Handle);
         (_ui["tip1"]["txt"] as TextField).htmlText = "<font color=\'#ffffff\'>" + "消耗" + "</font>" + GoldProductXMLInfo.getPriceByProID(this.awakeningInfo.onekeyproductid) + "<font color=\'#ffffff\'>钻石可直接完成</font>" + this.awakeningInfo.monstername + "<font color=\'#ffffff\'>觉醒，获得全新特性和技能！ </font>";
         this.updateItem();
         if(Boolean(_ui["tMc"]))
         {
            _ui["tMc"].gotoAndStop(this.isOld ? 2 : 1);
         }
         if(this._bossFightIdx != -1)
         {
            if(this.selectIdx == 1)
            {
               if(this.lastAwakenOpenState != -1)
               {
                  if(this.lastAwakenOpenState == 0 && this.bossStates.getValue(this.bossLevelInfo.id)["star"] > 0)
                  {
                  }
               }
               this.bossClickHandle();
            }
            else
            {
               if(this.lastAwakenOpenState != -1)
               {
                  if(this.lastAwakenOpenState == 0 && this.levelStates.getValue(this._bossFightIdx)["star"] > 0)
                  {
                  }
               }
               for(i4 = 0; i4 < this.infos.length; i4++)
               {
                  if(this._bossFightIdx == this.infos[i4].id)
                  {
                     this.scrollBar.index = int(i4 / 4);
                     this.gkClickHandle(i4 % 4);
                     break;
                  }
               }
            }
         }
      }
      
      private function showSub3Panel() : void
      {
         _ui["sub3"].visible = true;
         _ui["sub3"]["txt_7"].text = this.bossStates.getValue(this.bossLevelInfo.id)["lock"] > 0 ? this.bossLevelInfo.monsterdes : "？？？";
         for(var j:int = 0; j < this.infos.length; j++)
         {
            _ui["sub3"]["txt_" + j].text = this.levelStates.getValue(this.infos[j].id)["star"] > 0 ? this.infos[j].monsterdes : "？？？";
         }
      }
      
      private function updateRed(e:* = null) : void
      {
      }
      
      private function showTip1Handle(e:MouseEvent) : void
      {
         _ui["tip1"].visible = true;
      }
      
      private function hideTip1Handle(e:MouseEvent) : void
      {
         _ui["tip1"].visible = false;
      }
      
      private function updateItem(e:* = null) : void
      {
         if(Boolean(this.awakeningInfo))
         {
            ItemManager.updateItems([this.awakeningInfo.itemurl],function():void
            {
               itemNum = ItemManager.getNumByID(awakeningInfo.itemurl);
               _ui["need"].text = itemNum + "/" + awakeningInfo.itemnum;
               _ui["red_1"].visible = itemNum >= awakeningInfo.itemnum && !jxOver;
               CommonUI.setEnabled(_ui["jx"],itemNum >= awakeningInfo.itemnum && !jxOver);
               CommonUI.setEnabled(_ui["jxMoney"],!jxOver);
               CommonUI.setEnabled(_ui["buy"],itemNum < awakeningInfo.itemnum && !jxOver);
            });
         }
      }
      
      private function bossTgPetHandle(e:MouseEvent) : void
      {
         var _loc3_:Array = null;
         var _loc4_:int = 0;
      }
      
      private function hideBossTgPetHandle(e:MouseEvent) : void
      {
         _ui["mc"]["zr"].visible = false;
      }
      
      private function showTgPetHandle(e:MouseEvent) : void
      {
         var _loc5_:Array = null;
         var _loc6_:int = 0;
      }
      
      private function hideTgPetHandle(e:MouseEvent) : void
      {
         _ui["mc"]["zr"].visible = false;
      }
      
      override public function show() : void
      {
         this.refreshLevelInfo(this.superShow);
      }
      
      private function refreshLevelInfo(fun:Function = null) : void
      {
         SocketConnection.sendByQueue(45834,[this.awakeningId],function(e:SocketEvent):void
         {
            var j:int = 0;
            var i:int = 0;
            var obj:Object = null;
            var obj1:Object = null;
            levelStates = new HashMap();
            bossStates = new HashMap();
            var byte:ByteArray = e.data as ByteArray;
            var len:int = int(byte.readUnsignedInt());
            for(j = 0; j < len; j++)
            {
               obj = {};
               obj.id = byte.readUnsignedInt();
               obj.lock = byte.readUnsignedInt();
               obj.sd = byte.readUnsignedInt();
               obj.star = byte.readUnsignedInt();
               obj.leftTime = byte.readUnsignedInt();
               obj.arr = [];
               for(i = 0; i < 6; i++)
               {
                  obj.arr.push(byte.readUnsignedInt());
               }
               obj.lastBeiLv = byte.readUnsignedInt();
               levelStates.add(obj.id,obj);
            }
            len = int(byte.readUnsignedInt());
            for(j = 0; j < len; j++)
            {
               obj1 = {};
               obj1.id = byte.readUnsignedInt();
               obj1.lock = byte.readUnsignedInt();
               obj1.sd = byte.readUnsignedInt();
               obj1.star = byte.readUnsignedInt();
               obj1.leftTime = byte.readUnsignedInt();
               obj1.arr = [];
               for(i = 0; i < 6; i++)
               {
                  obj1.arr.push(byte.readUnsignedInt());
               }
               obj1.lastBeiLv = byte.readUnsignedInt();
               curPlus = obj1.lastBeiLv;
               bossStates.add(obj1.id,obj1);
            }
            if(fun != null)
            {
               fun();
            }
         });
      }
      
      private function limitInfoOverHandle(e:MouseEvent) : void
      {
         _ui["tipMc"].visible = true;
      }
      
      private function limitInfoOutHandle(e:MouseEvent) : void
      {
         _ui["tipMc"].visible = false;
      }
      
      private function onScrollMove(e:* = null) : void
      {
         var _curList:Array = this.infos.slice(this.scrollBar.index * 4,(this.scrollBar.index + 1) * 4);
         this.showAwards(_curList);
      }
      
      private function showAwards(arr:Array) : void
      {
         var openBoo:Boolean = false;
         var _loc4_:int = 0;
         var _loc5_:Object = null;
      }
      
      override protected function updatePanel() : void
      {
         this.updateItem();
         if(this._bossFightIdx != -1)
         {
            this._bossFightIdx = -1;
         }
         else
         {
            this.selectIdx = this.selectIdx;
         }
         var obj:Object = ElfAwakeningNewController.instance.getStateInfoByAid(this.awakeningId);
         CommonUI.setEnabled(_ui["jxMoney"],obj.state == 1);
         CommonUI.setEnabled(_ui["jx"],obj.state == 1);
         CommonUI.setEnabled(_ui["buy"],obj.state == 1);
      }
      
      override protected function onPanelClick(e:*) : void
      {
         var tmpidx:int = 0;
         var levelState:Object = null;
         var tmpState1:int = 0;
         var bossId:int = 0;
         var tmpState:int = 0;
         var xml:XML = null;
         var btnClick:BtnClick = null;
         var mapid:int = 0;
         var btnName:String = e.target.name;
         var index:int = int(btnName.split("_")[1]);
         var pindex:int = int(e.target.parent.name.split("_")[1]);
         switch(btnName)
         {
            case "close":
               this.hide();
               ModuleManager.showAppModule("ElfAwakeningNewMainPanel",{
                  "idx":(this.isOld ? 0 : 1),
                  "aid":this.awakeningId
               });
               break;
            case "tip":
               ModuleManager.showAppModule("ElfAwakeningNewTipPanel",this.isOld ? 0 : 1);
               break;
            case "pclose":
               _ui["sub"].visible = false;
               break;
            case "pclose1":
               _ui["sub1"].visible = false;
               break;
            case "pclose2":
               this.selectArr = this.serverSelect.concat();
               _ui["sub2"].visible = false;
               break;
            case "pclose3":
               _ui["sub3"].visible = false;
               break;
            case "detail":
               ModuleManager.showAppModule("AdvancedPetInfoNewPanel",this.awakeningInfo.mosterurl);
               break;
            case "addPanel":
               _ui["sub2"].visible = true;
               break;
            case "sBtn":
               if(this.selectArr.indexOf(pindex) != -1)
               {
                  tmpidx = int(this.selectArr.indexOf(pindex));
                  this.selectArr.splice(tmpidx,1);
               }
               else if(this.selectArr.length < 4)
               {
                  this.selectArr.push(pindex);
               }
               else
               {
                  this.selectArr.shift();
                  this.selectArr.push(pindex);
               }
               this.selectArr = this.selectArr;
               break;
            case "levelFight":
               if(this.petInbag(this.awakeningInfo.mosterurl,true))
               {
                  levelState = this.levelStates.getValue(this.selectLevelInfo.id);
                  tmpState1 = int(levelState.star);
                  SocketConnection.sendByQueue(45835,[this.awakeningId,1,this.levelIdx],function(e:*):void
                  {
                     hide();
                     FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,function(e:PetFightEvent):void
                     {
                        FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,arguments.callee);
                        ModuleManager.showAppModule("ElfAwakeningNewFightPanel",{
                           "id":awakeningId,
                           "boss":0,
                           "idx":levelIdx,
                           "state":tmpState1
                        });
                     });
                  });
               }
               break;
            case "bossFight":
               if(this.leftTime < 1)
               {
                  doAction("alarm2");
                  return;
               }
               bossId = int(this.bossLevelInfo.id);
               tmpState = int(this.bossLevelInfo.star);
               SocketConnection.sendByQueue(45835,[this.awakeningId,2,bossId],function(e:*):void
               {
                  hide();
                  FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,function(e:PetFightEvent):void
                  {
                     FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,arguments.callee);
                     ModuleManager.showAppModule("ElfAwakeningNewFightPanel",{
                        "id":awakeningId,
                        "boss":1,
                        "state":tmpState
                     });
                  });
               });
               break;
            case "bag":
               PetBagControllerNew.showByBuffer();
               break;
            case "cure":
               PetManager.cureAllFree();
               break;
            case "btn_" + index:
               break;
            case "task":
               ModuleManager.showAppModule("ElfAwakeningNewTaskPanel",this.awakeningId);
               break;
            case "jx":
               if(!this.petInDefault(this.awakeningInfo.mosterurl))
               {
                  return;
               }
               SocketConnection.sendByQueue(45837,[this.awakeningId,1],function(e:SocketEvent):void
               {
                  doAction("alarm7",[PetXMLInfo.getName(awakeningInfo.mosterurl)]);
                  hide();
                  ModuleManager.showAppModule("ElfAwakeningNewMainPanel",isOld ? 0 : 1);
               });
               break;
            case "jxMoney":
               if(!this.petInDefault(this.awakeningInfo.mosterurl))
               {
                  return;
               }
               if(this.checkEffect())
               {
                  KTool.buyProductByCallback(this.awakeningInfo.onekeyproductid,1,function():void
                  {
                     SocketConnection.sendByQueue(45837,[awakeningId,2],function(e:SocketEvent):void
                     {
                        doAction("alarm7",[PetXMLInfo.getName(awakeningInfo.mosterurl)]);
                        hide();
                        ModuleManager.showAppModule("ElfAwakeningNewMainPanel",isOld ? 0 : 1);
                     });
                  });
               }
               break;
            case "buy":
               ModuleManager.showAppModule("MultiBuyPanel",{
                  "productID":this.awakeningInfo.diamondid,
                  "iconID":this.awakeningInfo.itemurl,
                  "callFunction":function(tNum:int):void
                  {
                     SocketConnection.sendByQueue(45840,[awakeningId,1,tNum],function(e:SocketEvent):void
                     {
                        updateItem();
                     });
                  }
               });
               break;
            case "lFight":
               this.gkClickHandle(pindex);
               break;
            case "bFight":
               this.bossClickHandle();
               break;
            case "sd":
               if(this.leftTime < 1)
               {
                  doAction("alarm2");
                  return;
               }
               doAction("alert3",[this.curPlus]).then(function():void
               {
                  SocketConnection.sendByQueue(45836,[awakeningId,2,bossLevelInfo.id],function(e:SocketEvent):void
                  {
                     refresh();
                     leftTime -= 1;
                     bossStates.getValue(bossLevelInfo.id).leftTime = leftTime;
                     _ui["sub1"]["left"].text = leftTime + "/" + bossLevelInfo.time;
                  });
               });
               break;
            case "sok":
               if(this.selectArr.length > 4)
               {
                  doAction("alarm1");
                  return;
               }
               this.setServerSelectArr();
               _ui["sub2"].visible = false;
               break;
            case "petGo":
               if(this.awakeningInfo.jumpparam == "1")
               {
                  xml = PetBookXMLInfo.getPetXML(this.awakeningInfo.mosterurl);
                  if(Boolean(xml.hasOwnProperty("@Redirect")))
                  {
                     if(xml.@Go != "0")
                     {
                        this.hide();
                        btnClick = new BtnClick();
                        btnClick.type = xml.@Redirect;
                        btnClick.content = xml.@Go;
                        btnClick.onClick();
                     }
                  }
                  else
                  {
                     mapid = int(PetBookXMLInfo.getMapID(this.awakeningInfo.mosterurl));
                     if(mapid != 0)
                     {
                        this.hide();
                        MapManager.changeMap(mapid);
                     }
                  }
               }
               else if(this.awakeningInfo.jumpparam == "2")
               {
                  KTool.getHasEverGotPet([this.awakeningInfo.mosterurl],function(tmpPetArr:Array):void
                  {
                     if(_ui == null)
                     {
                        return;
                     }
                     if(tmpPetArr[0] > 0)
                     {
                        doAction("alarm5");
                        return;
                     }
                     doAction("alert5",[awakeningInfo.exchangepercnt,ItemXMLInfo.getName(awakeningInfo.itemurl),PetXMLInfo.getName(awakeningInfo.mosterurl)]).then(function():void
                     {
                        if(itemNum < awakeningInfo.exchangepercnt)
                        {
                           doAction("alarm8",[ItemXMLInfo.getName(awakeningInfo.itemurl)]);
                           return;
                        }
                        SocketConnection.sendByQueue(45840,[awakeningId,2,1],function(e:SocketEvent):void
                        {
                           refresh();
                        });
                     });
                  });
               }
               break;
            case "btn1":
               this.showSub3Panel();
         }
      }
      
      public function checkEffect(needAlarm:Boolean = true) : Boolean
      {
         var oldEffId:int = int(PetAdvanceNewXMLInfo.getPetAdvancedOSe(this.awakeningInfo.mosterurl));
         var condition_effect:Boolean = Boolean(PetManager.getPetisOpenEffectByCatchTime(PetManager.defaultTime,oldEffId));
         var condition_fifthSkill:Boolean = true;
         var fifArr:Array = SkillXMLInfo.getAllHideSkills(this.awakeningInfo.mosterurl);
         if(fifArr.length > 0)
         {
            if(fifArr[0] != 0)
            {
               condition_fifthSkill = PetManager.getPetInfo(PetManager.defaultTime).hideSKill != null;
            }
         }
         if(condition_effect && condition_fifthSkill)
         {
            return true;
         }
         if(!needAlarm)
         {
            return false;
         }
         if(condition_effect == false)
         {
            Alarm.show("尚未开启对应专属特性！");
            return false;
         }
         if(condition_fifthSkill == false)
         {
            Alarm.show("尚未开启对应第五技能！");
            return false;
         }
         return false;
      }
      
      private function setServerSelectArr() : void
      {
         var j:int;
         var byte:ByteArray = new ByteArray();
         byte.writeUnsignedInt(this.selectArr.length);
         for(j = 0; j < this.selectArr.length; j++)
         {
            byte.writeUnsignedInt(this.bossBuffs[this.selectArr[j]].id);
         }
         SocketConnection.sendByQueue(45839,[this.awakeningId,this.bossLevelInfo.id,byte],function(e:SocketEvent):void
         {
            serverSelect = selectArr;
         });
      }
      
      private function getServerSelectArr() : void
      {
         SocketConnection.sendByQueue(45838,[this.awakeningId,this.bossLevelInfo.id],function(e:SocketEvent):void
         {
            var tmpIdx:int = 0;
            if(_ui == null)
            {
               return;
            }
            serverSelect = [];
            var byte:ByteArray = e.data as ByteArray;
            var len:int = int(byte.readUnsignedInt());
            for(var j:int = 0; j < len; j++)
            {
               tmpIdx = int(byte.readUnsignedInt());
               serverSelect.push(getInfoIdxById(tmpIdx));
            }
            selectArr = serverSelect.concat();
         });
      }
      
      private function getInfoIdxById(bid:int) : int
      {
         for(var j:int = 0; j < this.bossBuffs.length; j++)
         {
            if(this.bossBuffs[j].id == bid)
            {
               return j;
            }
         }
         return -1;
      }
      
      private function petInbag(pid:int, first:Boolean = false) : Boolean
      {
         var boo:Boolean = false;
         return true;
      }
      
      private function petInDefault(pid:int, showAlarm:Boolean = true) : Boolean
      {
         var boo:Boolean = false;
         if(PetManager.getDefaultByPetIDs([pid]))
         {
            boo = true;
         }
         else if(showAlarm)
         {
            doAction("alert4",PetXMLInfo.getName(pid)).then(function():void
            {
               PetBagControllerNew.showByBuffer();
            });
         }
         return boo;
      }
      
      private function removeEvent() : void
      {
      }
      
      private function addEvent() : void
      {
      }
      
      private function loadMonster(monID:uint, skinid:int, container:DisplayObjectContainer) : void
      {
         ResourceManager.getResource(ClientConfig.getPetHeadPath(monID,0,skinid),function(dis:DisplayObject):void
         {
            var mc:MovieClip = null;
            if(_ui == null)
            {
               return;
            }
            if(container["cid"] == monID)
            {
               DisplayUtil.removeAllChild(container as MovieClip);
               mc = dis as MovieClip;
               DisplayUtil.stopAllMovieClip(mc);
               CommonUI.equalScale(mc,container.parent.width,container.parent.height);
               CommonUI.centerAlign(mc,new Sprite(),new Point(0,0));
               container.addChild(mc);
            }
         },"item");
      }
      
      private function gkClickHandle(idx:int) : void
      {
         var _loc7_:Object = null;
      }
      
      private function bossClickHandle() : void
      {
         var bossReadObj:Object = null;
         this.getServerSelectArr();
         _ui["sub1"].visible = true;
         (_ui["sub1"]["pName"] as TextField).htmlText = "";
         _ui["sub1"]["des"].text = this.bossLevelInfo.sceneeffect.split("\\n").join("\n");
         var pets:Array = this.bossLevelInfo.troopid.split(";");
         var item:String = this.bossLevelInfo.itemid;
         var itemArr:Array = item.split("_");
         var bossStateInfo:Object = this.bossStates.getValue(this.bossLevelInfo.id);
         for(var j:int = 0; j < 6; j++)
         {
            ToolTipManager.remove(_ui["sub"]["mc_" + j]["con"]);
            if(j < pets.length)
            {
               bossReadObj = ElfAwakeningNewXmlInfo.getBossConfigByBid(parseInt(pets[j]));
               _ui["sub1"]["mc_" + j].visible = true;
               _ui["sub1"]["mc_" + j]["con"].cid = bossReadObj.monsterId;
               this.loadMonster(bossReadObj.monsterId,0,_ui["sub1"]["mc_" + j]["con"]);
            }
            else
            {
               _ui["sub1"]["mc_" + j].visible = false;
            }
         }
         _ui["sub1"]["icon"]["con"].cid = parseInt(itemArr[1]);
         this.loadItem(parseInt(itemArr[1]),_ui["sub1"]["icon"]["con"],1,parseInt(itemArr[0]));
         CommonUI.setEnabled(_ui["sub1"]["sd"],bossStateInfo["sd"] == 1);
         this.leftTime = bossStateInfo.leftTime;
         _ui["sub1"]["left"].text = this.leftTime + "/" + this.bossLevelInfo.time;
         _ui["sub1"]["bl"].text = this.curPlus + "%";
      }
      
      override public function hide() : void
      {
         var j:int = 0;
         EventManager.removeEventListener("ElfAwakeningNewTaskRefresh",this.updateItem);
         EventManager.removeEventListener(RedSystemController.RED_UPDATED,this.updateRed);
         for(var k:int = 0; k < 6; k++)
         {
            ToolTipManager.remove(_ui["sub"]["mc_" + k]["con"]);
            ToolTipManager.remove(_ui["sub1"]["mc_" + k]["con"]);
         }
         if(Boolean(this.levelStates))
         {
            this.levelStates.clear();
            this.levelStates = null;
         }
         if(Boolean(this.bossStates))
         {
            this.bossStates.clear();
            this.bossStates = null;
         }
         for(var i2:int = 0; i2 < 3; i2++)
         {
            DisplayUtil.removeAllChild(_ui["tipMc"]["icon_" + i2]["con"]);
         }
         this.clearItem();
         for(j = 0; j < 6; j++)
         {
            DisplayUtil.removeAllChild(_ui["sub"]["mc_" + j]["con"]);
            DisplayUtil.removeAllChild(_ui["mc"]["zr"]["mc_" + j]["con"]);
         }
         for(j = 0; j < 6; j++)
         {
            DisplayUtil.removeAllChild(_ui["sub1"]["mc_" + j]["con"]);
         }
         if(Boolean(this.scrollBar))
         {
            this.scrollBar.removeEventListener(MouseEvent.MOUSE_MOVE,this.onScrollMove);
            this.scrollBar.destroy();
         }
         this.serverSelect = null;
         this.scrollBar = null;
         this.infos = null;
         this.curInfos = null;
         this.bossBuffs = null;
         this.awakeningInfo = null;
         this.bossLevelInfo = null;
         this._selectArr = null;
         this.selectLevelInfo = null;
         super.hide();
      }
      
      public function get selectIdx() : int
      {
         return this._selectIdx;
      }
      
      public function set selectIdx(value:int) : void
      {
         this._selectIdx = value;
         for(var i2:int = 0; i2 < 2; i2++)
         {
            _ui["btnmc_" + i2].gotoAndStop(i2 == this.selectIdx ? 2 : 1);
            _ui["btnmc_" + i2].visible = false;
         }
         for(var j:int = 0; j < 4; j++)
         {
            _ui["mc"]["mc_" + j].visible = this.selectIdx == 0;
         }
         _ui["mc"]["bar"].visible = this.selectIdx == 0;
         _ui["mc"]["bossMc"].visible = this.selectIdx == 1;
         if(this.selectIdx == 0)
         {
            this.scrollBar.index = 0;
            this.scrollBar.totalLength = Math.ceil(this.infos.length / 4);
            this.onScrollMove();
         }
         else
         {
            _ui["mc"]["bossMc"]["flag"].visible = this.bossStates.getValue(this.bossLevelInfo.id)["lock"] == 0;
            CommonUI.setEnabled(_ui["mc"]["bossMc"]["bFight"],this.bossStates.getValue(this.bossLevelInfo.id)["lock"] == 1);
            _ui["mc"]["bossMc"]["bossDes"].visible = false;
            _ui["mc"]["bossMc"]["bossDes"].gotoAndStop(this.bossStates.getValue(this.bossLevelInfo.id)["lock"] == 0 ? 2 : 1);
            if(Boolean(_ui["mc"]["bossMc"]["bossDes"]["txt"]))
            {
               _ui["mc"]["bossMc"]["bossDes"]["txt"].text = this.bossLevelInfo.monsterdes;
            }
            _ui["mc"]["bossMc"]["bossTg"].visible = false;
         }
      }
      
      public function get selectArr() : Array
      {
         return this._selectArr;
      }
      
      public function set selectArr(value:Array) : void
      {
         var i2:int = 0;
         var j:int = 0;
         var tmp:Object = null;
         this._selectArr = value;
         var num:int = 100;
         if(this._selectArr != null)
         {
            for(i2 = 0; i2 < 8; i2++)
            {
               _ui["sub2"]["item_" + i2].gotoAndStop(this.selectArr.indexOf(i2) != -1 ? 2 : 1);
            }
            _ui["sub2"]["num"].text = this._selectArr.length + "/4";
            for(j = 0; j < this._selectArr.length; j++)
            {
               tmp = this.bossBuffs[this._selectArr[j]];
               if(tmp.bufftype == 1)
               {
                  num -= parseInt(tmp.extranum);
               }
               else
               {
                  num += parseInt(tmp.extranum);
               }
            }
            _ui["sub2"]["num2"].text = num + "%";
            _ui["sub1"]["num"].text = num + "%";
         }
         else
         {
            _ui["sub2"]["num2"].text = num + "%";
            _ui["sub1"]["num"].text = num + "%";
         }
         var item:String = this.bossLevelInfo.itemid;
         var itemArr:Array = item.split("_");
         var temp_base_num:int = num * parseInt(itemArr[2]);
         var t_reward_num:int = temp_base_num / 100;
         if(temp_base_num % 100 >= 50)
         {
            t_reward_num += 1;
         }
         _ui["sub1"]["itemNum"].text = t_reward_num;
      }
      
      private function clearItem() : void
      {
         var j:int = 0;
         if(Boolean(this.itemMcs))
         {
            for(j = 0; j < this.itemMcs.length; j++)
            {
               ToolTipManager.remove(this.itemMcs[j]);
               this.itemMcs[j].removeEventListener(MouseEvent.ROLL_OVER,this.overHandle);
               this.itemMcs[j].removeEventListener(MouseEvent.ROLL_OUT,this.outHandle);
               if(Boolean(this.itemMcs[j].parent))
               {
                  this.itemMcs[j].parent.removeChild(this.itemMcs[j]);
               }
               this.itemMcs[j] = null;
            }
            this.itemMcs = null;
         }
      }
      
      private function outHandle(e:MouseEvent) : void
      {
         ItemInfoTip.hide();
      }
      
      private function overHandle(e:MouseEvent) : void
      {
         var id:int = int(e.currentTarget.parent.cid);
         var info:SingleItemInfo = new SingleItemInfo();
         info.itemID = id;
         ItemInfoTip.show(info);
      }
      
      private function loadItem(id:uint, container:DisplayObjectContainer, scale:int = 1, type:int = 1, w:int = 0, h:int = 0) : void
      {
         var str:String;
         var rSkinId:int = 0;
         var skinInfo:PetSkinInfo = null;
         DisplayUtil.removeAllChild(container as MovieClip);
         str = "";
         if(type == 1)
         {
            str = ItemXMLInfo.getIconURL(id);
         }
         else if(type == 2)
         {
            str = CountermarkXMLInfo.getIconURL(id);
         }
         else if(type == 6)
         {
            rSkinId = int(id);
            skinInfo = PetSkinXMLInfo.getSkinInfo(rSkinId);
            str = ClientConfig.getPetHeadPath(skinInfo.monId,0,skinInfo.id);
         }
         else if(type == 12)
         {
            str = ClientConfig.getClothSuitPath(id);
         }
         ResourceManager.getResource(str,function(dis:DisplayObject):void
         {
            if(_ui == null || container["cid"] != id)
            {
               return;
            }
            var mc:MovieClip = dis as MovieClip;
            if(type == 6)
            {
               ToolTipManager.add(mc,PetSkinXMLInfo.getSkinInfo(id).name);
               mc.scaleX = mc.scaleY = 0.5;
            }
            else if(type == 12)
            {
               ToolTipManager.add(mc,SuitXMLInfo.getName(id));
            }
            else
            {
               mc.addEventListener(MouseEvent.ROLL_OVER,overHandle);
               mc.addEventListener(MouseEvent.ROLL_OUT,outHandle);
            }
            if(itemMcs == null)
            {
               itemMcs = [];
            }
            itemMcs.push(mc);
            if(w != 0 && h != 0)
            {
               CommonUI.equalScale(mc,w,h);
            }
            CommonUI.centerAlign(mc,new Sprite(),new Point(0,0));
            container.addChild(mc);
         },"item");
      }
   }
}

