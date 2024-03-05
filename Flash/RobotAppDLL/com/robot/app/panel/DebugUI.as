package com.robot.app.panel
{
   import com.robot.app.debug.Stats;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.BitBuffSetClass;
   import com.robot.core.CommandID;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.config.xml.AchieveXMLInfo;
   import com.robot.core.event.MapEvent;
   import com.robot.core.info.pet.PetEffectInfo;
   import com.robot.core.info.pet.PetInfo;
   import com.robot.core.manager.BufferRecordManager;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.PetManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.manager.VersionManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.ui.alert.Alarm;
   import com.robot.core.utils.TextFormatUtil;
   import flash.display.DisplayObject;
   import flash.display.MovieClip;
   import flash.display.Sprite;
   import flash.events.Event;
   import flash.events.KeyboardEvent;
   import flash.events.MouseEvent;
   import flash.system.System;
   import flash.system.fscommand;
   import flash.text.TextField;
   import flash.utils.ByteArray;
   import flash.utils.getDefinitionByName;
   import flash.utils.getTimer;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.ResourceManager;
   import org.taomee.manager.ToolTipManager;
   import org.taomee.module.IModule;
   import org.taomee.utils.DisplayUtil;
   
   public class DebugUI
   {
      
      private static var _ui:MovieClip;
      
      private static var _day:Array = ["周日","周一","周二","周三","周四","周五","周六"];
      
      private static var statTime:uint;
      
      private static var statFrame:uint = 0;
      
      private static var _isShowModuleName:Boolean = false;
      
      private static var commandEg:Array = ["@additem 物品ID 数量","@addpet 精灵ID 等级","@addmintmark ID","检查商品","@setvalue USERINFO_KEY VALUE","@clearvalue ID ID …","@getvalue ID ID …","@addspmove monsterid spmoveid","@setbitbuf BITBUF_KEY VALUE","@getbitbuf ID ID …","@clearbitbuf ID ID …","@settask TASK_ID STATE","@gettask TASK_ID TASK_ID …","@reset","@addmail","@notice","@addskin","精灵特性","总成就点数","导出技能表","查询物品","fullscreen","chaxunwupin","addtmpnewse monid newseid","@addnewse monid newseid","@add5thmove monid","@getinfo key","front","@addtmpse MONID NEWSEID","@monsterinfo CATCHTIME","@addach BRANCHID SUBID","@addfire FIREBUFFID","@setscore SCORE","@gethalfbytes KEY POST POST...","@getbytes KEY POST","@gettwobytes KEY POST","@getbitvalue KEY POST POST...","@sethalfbytes KEY POST VALUE POST VALUE...","@setbytes KEY POST VALUE","@settwobytes KEY POST VALUE","@setbiton KEY POST POST...","@setbitoff KEY POST POST..."];
      
      private static var tipsUI:Array = [];
       
      
      public function DebugUI()
      {
         super();
      }
      
      public static function setup() : void
      {
         var scheduleController:*;
         if(!MainManager.isDebug)
         {
            return;
         }
         scheduleController = null;
         try
         {
            scheduleController = getDefinitionByName("com.robot.app2.control.ScheduleController");
         }
         catch(err:Error)
         {
         }
         if(scheduleController)
         {
            scheduleController.setup();
         }
         getDefinitionByName("com.robot.app2.control.debug.ItemChangeDisplayController").setup();
         if(_ui == null)
         {
            ResourceManager.getResource(VersionManager.getURL("resource/debug/debug.swf"),function(param1:DisplayObject):void
            {
               _ui = param1 as MovieClip;
               _ui.x = 634;
               _ui.y = 72;
               LevelManager.stage.addChild(_ui);
               _ui.mouseEnabled = false;
               statTime = getTimer();
               SystemTimerManager.addTickFun(update);
               _ui["change"].buttonMode = true;
               _ui["change"].gotoAndStop(1);
               _ui["change"].addEventListener(MouseEvent.CLICK,onChange);
               _ui["map"].multiline = false;
               _ui["map"].maxChars = 5;
               _ui["map"].restrict = "0-9";
               _ui["map"].addEventListener(KeyboardEvent.KEY_UP,onKey);
               MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,onSwitchMap);
               _ui["map"].text = "1";
               _ui["moduleName"].addEventListener(KeyboardEvent.KEY_UP,onModuleInput);
               _ui["moduleName"].addEventListener(Event.CHANGE,onInputCmd);
               _ui["bufferID"].maxChars = 5;
               _ui["bufferID"].restrict = "0-9";
               _ui["change_1"].addEventListener(MouseEvent.CLICK,onChangeBuff);
               _ui["change_0"].addEventListener(MouseEvent.CLICK,onChangeBuff);
               _ui["mapObj"].addEventListener(MouseEvent.CLICK,onMapObjBtnClick);
               _ui["cTest"].addEventListener(MouseEvent.CLICK,onCtestClick);
               _ui["btnSchedule"].addEventListener(MouseEvent.CLICK,onScheduleClick);
               _ui["spanel"].addEventListener(MouseEvent.CLICK,onSpanelHandle);
               if(_ui["showModuleNameBox"])
               {
                  _ui["showModuleNameBox"].buttonMode = true;
                  _ui["showModuleNameBox"].addEventListener(MouseEvent.CLICK,onClickBox);
               }
               ToolTipManager.add(_ui["showModuleNameBox"],"显示模块名");
               KTool.initDrag(_ui,_ui["bg"]);
               var _loc2_:Sprite = new Stats();
               _loc2_.x = 165;
               _loc2_.y = _ui.height;
               _ui.addChild(_loc2_);
            },"ui");
         }
      }
      
      public static function showLastModuleName(param1:String) : void
      {
         if(_ui != null && _isShowModuleName)
         {
            _ui["moduleName"].text = param1;
         }
      }
      
      private static function onDebugQuery(param1:MouseEvent) : void
      {
         ModuleManager.showAppModule("debug/DebugQueryPanel");
      }
      
      private static function onClickBox(param1:MouseEvent) : void
      {
         _isShowModuleName = !_isShowModuleName;
         _ui["showModuleNameBox"].gotoAndStop(1);
         if(_isShowModuleName)
         {
            _ui["showModuleNameBox"].gotoAndStop(2);
         }
      }
      
      private static function onClickReplay(param1:Event) : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("ReplayPanel"));
      }
      
      private static function onSwitchMap(param1:MapEvent) : void
      {
         if(Boolean(_ui) && Boolean(_ui["map"]))
         {
            _ui["map"].text = MapManager.currentMap.id.toString();
         }
      }
      
      private static function onCtestClick(param1:MouseEvent) : void
      {
         var args:Array;
         var cmId:int = 0;
         var arr:Array = null;
         var delim:String = null;
         var mvName:String = null;
         var i:int = 0;
         var e:MouseEvent = param1;
         var txt:String = String(_ui["moduleName"].text);
         if(txt.indexOf(".swf") != -1)
         {
            mvName = String(txt.split(".")[0]);
            AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie(mvName));
            return;
         }
         args = [];
         for each(delim in [","," ","\t"])
         {
            if(txt.indexOf(delim) != -1)
            {
               arr = txt.split(delim);
            }
         }
         if(arr == null)
         {
            cmId = int(txt);
            if(cmId == 0)
            {
               Alarm.show("协议号不能为0");
               return;
            }
            SocketConnection.sendWithCallback2(cmId,function(param1:SocketEvent):void
            {
               var _loc4_:int = 0;
               var _loc5_:int = 0;
               if(!param1.data)
               {
                  return;
               }
               var _loc2_:ByteArray = param1.data as ByteArray;
               _loc2_.position = 0;
               var _loc3_:String = "";
               while(_loc2_.bytesAvailable)
               {
                  _loc5_ = (_loc4_ = _loc2_.readByte()) >= 0 ? _loc4_ : _loc4_ + 256;
                  _loc3_ += "-" + _loc5_.toString();
               }
               Alarm.show("协议回包：length-->" + _loc2_.length + "；内容-->" + _loc3_);
            });
            Alarm.show("发送协议 协议号 :" + cmId + "    参数 ：无");
         }
         else
         {
            cmId = parseInt(arr.shift());
            if(cmId == 0)
            {
               Alarm.show("协议号不能为0");
               return;
            }
            i = 0;
            while(i < arr.length)
            {
               args[i] = parseInt(arr[i]);
               i++;
            }
            SocketConnection.sendWithCallback2(cmId,function(param1:SocketEvent):void
            {
               var _loc4_:int = 0;
               var _loc5_:int = 0;
               if(!param1.data)
               {
                  return;
               }
               var _loc2_:ByteArray = param1.data as ByteArray;
               _loc2_.position = 0;
               var _loc3_:String = "";
               while(_loc2_.bytesAvailable)
               {
                  _loc5_ = (_loc4_ = _loc2_.readByte()) >= 0 ? _loc4_ : _loc4_ + 256;
                  _loc3_ += "-" + _loc5_.toString();
               }
               Alarm.show("协议回包：length-->" + _loc2_.length + "；内容-->" + _loc3_);
            },args);
            Alarm.show("发送协议 协议号 :" + cmId + "    参数 ：" + args);
         }
      }
      
      private static function onMapObjBtnClick(param1:*) : void
      {
         if(ModuleManager.hasModule(ClientConfig.getAppModule("MapObjEditorPanel")))
         {
            ModuleManager.destroy(ClientConfig.getAppModule("MapObjEditorPanel"));
         }
         else
         {
            ModuleManager.showModule(ClientConfig.getAppModule("MapObjEditorPanel"));
         }
      }
      
      private static function onSpanelHandle(param1:MouseEvent) : void
      {
         var _loc2_:IModule = null;
         ModuleManager.showModule(ClientConfig.getAppModule("SBossPosPanel"));
         if(ModuleManager.hasModule(ClientConfig.getAppModule("PetSkillPanel")))
         {
            _loc2_ = ModuleManager.getModule(ClientConfig.getAppModule("PetSkillPanel")).content;
            _loc2_["playMoveEffectMovie"](20013,10250);
         }
      }
      
      private static function onScheduleClick(param1:MouseEvent) : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("WeekTaskListPanel"));
      }
      
      private static function onChangeBuff(param1:Event) : void
      {
         var bool:Boolean = false;
         var id:uint = 0;
         var value:int = 0;
         var e:Event = param1;
         bool = Boolean(uint(e.currentTarget.name.split("_")[1]));
         id = uint(_ui["bufferID"].text);
         if(id >= 22401 && id <= 25600)
         {
            value = bool ? 1 : 0;
            BitBuffSetClass.setState(id,value,function():void
            {
               Alarm.show(id + "  --->  " + bool.toString() + "   success!");
            });
         }
         else
         {
            BufferRecordManager.setState(MainManager.actorInfo,id,bool,function():void
            {
               Alarm.show(id + "  --->  " + bool.toString() + "   success!");
            });
         }
      }
      
      private static function update() : void
      {
         var _loc1_:Date = SystemTimerManager.sysBJDate;
         _ui["time"].text = _loc1_.fullYear + "-" + (_loc1_.month + 1) + "-" + _loc1_.date + " " + _loc1_.hours + ":" + _loc1_.minutes + ":" + _loc1_.seconds + " " + _day[_loc1_.day];
         var _loc2_:uint = System.totalMemory / 1024 / 1024;
      }
      
      private static function onKey(param1:KeyboardEvent) : void
      {
         if(param1.charCode == 13)
         {
            if(uint(_ui["map"].text) != 0 && uint(_ui["map"].text) != MapManager.currentMap.id)
            {
               if(uint(_ui["map"].text) > 10000)
               {
                  MapManager.changeLocalMap(uint(_ui["map"].text));
               }
               else
               {
                  MapManager.changeMap(uint(_ui["map"].text));
               }
            }
         }
      }
      
      private static function onChange(param1:MouseEvent) : void
      {
         if(_ui["change"].currentFrame == 1)
         {
            setUIUnFold(false);
         }
         else
         {
            setUIUnFold(true);
         }
         _ui["change"].gotoAndStop(3 - _ui["change"].currentFrame);
      }
      
      private static function setUIUnFold(param1:Boolean) : void
      {
         var _loc3_:DisplayObject = null;
         var _loc2_:int = 0;
         while(_loc2_ < _ui.numChildren)
         {
            _loc3_ = _ui.getChildAt(_loc2_);
            _loc3_.visible = param1;
            _loc2_++;
         }
         _ui["change"].visible = true;
      }
      
      private static function onModuleInput(param1:KeyboardEvent) : void
      {
         var _loc2_:String = null;
         var _loc3_:String = null;
         var _loc4_:Array = null;
         var _loc5_:Object = null;
         var _loc6_:* = undefined;
         var _loc7_:int = 0;
         var _loc8_:int = 0;
         var _loc9_:PetInfo = null;
         var _loc10_:* = null;
         var _loc11_:uint = 0;
         var _loc12_:PetEffectInfo = null;
         var _loc13_:ByteArray = null;
         var _loc14_:int = 0;
         var _loc15_:int = 0;
         var _loc16_:* = undefined;
         if(param1.charCode == 13)
         {
            _loc2_ = String(TextFormatUtil.trim(_ui["moduleName"].text));
            _loc3_ = String(_loc2_.split(" ")[1]);
            _loc4_ = _loc2_.split(" ");
            if(_loc2_.split(" ")[0] == "test")
            {
               (_loc5_ = new Object()).isWin = true;
               _loc5_.oldScore = _loc2_.split(" ")[1];
               ModuleManager.showModule(ClientConfig.getAppModule("PeakJihadBattleEnd2016RevisionPanel"),"正在打开....",_loc5_);
            }
            else if(_loc4_[0] == "js")
            {
               (_loc6_ = getDefinitionByName("com.robot.app2.control.jsControl.JSController").instance).jsCommand(_loc4_[1],_loc4_[2]);
            }
            else if(_loc2_ == "检查商品")
            {
               ModuleManager.showModule(ClientConfig.getModule("app/ProductBuyCheckPanel"));
            }
            else if(_loc2_ == "查询物品" || _loc2_ == "chaxunwupin")
            {
               ModuleManager.showModule(ClientConfig.getModule("app/DiscoverItemsPanel"));
            }
            else if(_loc2_ == "fullscreen")
            {
               fscommand("fullscreen","true");
            }
            else if(_loc2_.indexOf("精灵特性") != -1)
            {
               _loc7_ = parseInt(_loc3_);
               _loc8_ = int(PetManager.getBagMap(false)[_loc7_].catchTime);
               _loc10_ = (_loc9_ = PetManager.getPetInfo(_loc8_)).id + "";
               _loc11_ = 0;
               while(_loc11_ < _loc9_.effectList.length)
               {
                  _loc12_ = _loc9_.effectList[_loc11_];
                  _loc10_ += " eid:" + _loc12_.effectID + "args:" + _loc12_.args + ";";
                  _loc11_++;
               }
               System.setClipboard(_loc10_);
            }
            else if(_loc2_ == "总成就点数")
            {
               AchieveXMLInfo.showTotal();
            }
            else if(_loc2_ == "front")
            {
               LevelManager.topLevel.addChild(_ui);
            }
            else if(_loc2_ == "导出技能表")
            {
               ModuleManager.showModule(ClientConfig.getModule("app/ExportSkillDesToExcel"));
            }
            else if(_loc2_.split("")[0] == "@")
            {
               _loc13_ = new ByteArray();
               _loc14_ = _loc2_.length;
               _loc15_ = 0;
               while(_loc15_ < _loc14_)
               {
                  if(_loc13_.length > 131)
                  {
                     break;
                  }
                  _loc13_.writeUTFBytes(_loc2_.charAt(_loc15_));
                  _loc15_++;
               }
               _loc13_.writeUTFBytes("0");
               SocketConnection.send(CommandID.CHAT,0,_loc13_.length,_loc13_);
            }
            else if(int(_loc2_.charAt(0)) != 0)
            {
               onCtestClick(null);
            }
            else if(_loc2_.indexOf("/") == -1)
            {
               if((_loc16_ = getDefinitionByName("com.robot.app2.systems.mapObject.MapObjectControl")).getBtnClickByName(_loc2_))
               {
                  _loc16_.getBtnClickByName(_loc2_).onClick();
               }
            }
            else
            {
               ModuleManager.showModule(ClientConfig.getModule(_loc2_));
               System.setClipboard(_loc2_);
            }
            _ui["moduleName"].text = "";
         }
      }
      
      private static function onInputCmd(param1:Event) : void
      {
         var _loc4_:String = null;
         var _loc2_:String = String(_ui["moduleName"].text);
         if(_loc2_ == "")
         {
            removeHint();
            return;
         }
         var _loc3_:Array = [];
         for each(_loc4_ in commandEg)
         {
            if(_loc4_.indexOf(_loc2_) != -1)
            {
               _loc3_.push(_loc4_);
            }
         }
         if(_loc3_.length > 0)
         {
            addHint(_loc3_);
         }
         else
         {
            removeHint();
         }
      }
      
      private static function addHint(param1:Array) : void
      {
         var _loc2_:int = 0;
         var _loc3_:TextField = null;
         removeHint();
         _loc2_ = 0;
         while(_loc2_ < param1.length)
         {
            _loc3_ = new TextField();
            _loc3_.background = true;
            _loc3_.backgroundColor = 16777215;
            _loc3_.width = 245;
            _loc3_.text = param1[_loc2_];
            _loc3_.x = 6;
            _loc3_.y = 82 + 20 * _loc2_;
            _ui.addChild(_loc3_);
            _loc3_.addEventListener(MouseEvent.CLICK,onSelectCmd);
            tipsUI.push(_loc3_);
            _loc2_++;
         }
      }
      
      private static function removeHint() : void
      {
         var _loc1_:int = 0;
         _loc1_ = 0;
         while(_loc1_ < tipsUI.length)
         {
            tipsUI[_loc1_].removeEventListener(MouseEvent.CLICK,onSelectCmd);
            DisplayUtil.removeForParent(tipsUI[_loc1_]);
            _loc1_++;
         }
         tipsUI = [];
      }
      
      private static function onSelectCmd(param1:MouseEvent) : void
      {
         var _loc2_:TextField = param1.currentTarget as TextField;
         _ui["moduleName"].text = _loc2_.text;
         removeHint();
      }
   }
}
