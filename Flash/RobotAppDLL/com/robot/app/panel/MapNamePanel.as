package com.robot.app.panel
{
   import com.robot.app.control.MiniMapController;
   import com.robot.core.CommandID;
   import com.robot.core.config.IXmlInfo.IStarmapInfo;
   import com.robot.core.config.IXmlInfo.IStarmaplistInfo;
   import com.robot.core.config.Ixml.Map_h5;
   import com.robot.core.config.Ixml.Starmap_h5;
   import com.robot.core.config.Ixml.Starmaplist_h5;
   import com.robot.core.event.SysTimeEvent;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.manager.UIManager;
   import com.robot.core.manager.map.config.MapConfig;
   import com.robot.core.net.SocketConnection;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import flash.text.TextField;
   import flash.text.TextFormat;
   import flash.utils.ByteArray;
   import gs.TweenLite;
   import gs.easing.Back;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.EventManager;
   import org.taomee.utils.AlignType;
   import org.taomee.utils.DisplayUtil;
   
   public class MapNamePanel
   {
      
      private static var _ui:MovieClip;
      
      private static var _expTipUI:MovieClip;
      
      private static var _mc:MovieClip;
      
      private static var _isCanShow:Boolean;
      
      private static var haveShow:Boolean;
      
      private static var _isPepoleClose:Boolean = false;
      
      private static var _specialExpStr:String = "";
      
      public static var currentExp:int;
      
      public static var currentLearn:int;
      
      public static var expInfos:Array = [];
       
      
      public function MapNamePanel()
      {
         super();
      }
      
      public static function setInfoTx(param1:String, param2:String, param3:String) : void
      {
         _ui["infoMc"]["starListNameTx"].text = param1;
         _ui["infoMc"]["starNameTx"].text = param2;
         _ui["infoMc"]["mapNameTx"].text = param3;
      }
      
      public static function set nameText(param1:String) : void
      {
         _ui["nameTxt"].text = param1;
      }
      
      public static function set ChildMc(param1:MovieClip) : void
      {
         _mc = param1;
         if(_mc)
         {
            _ui["conMc"].addChild(_mc);
            _mc.gotoAndStop(1);
            _mc.alpha = 0;
         }
      }
      
      public static function autoOpenOrClose(param1:Boolean, param2:uint = 2) : void
      {
         _isCanShow = param1;
         if(_isCanShow)
         {
            if(_mc)
            {
               _mc.gotoAndStop(param2);
               if(!haveShow && !_isPepoleClose)
               {
                  openTipEffect();
               }
            }
         }
         else if(haveShow)
         {
            if(_mc)
            {
               _isPepoleClose = false;
               closeTipEffect();
            }
         }
      }
      
      public static function init(param1:uint) : void
      {
         var _loc2_:TextFormat = null;
         var _loc5_:int = 0;
         var _loc6_:IStarmaplistInfo = null;
         if(_ui == null)
         {
            _ui = UIManager.getMovieClip("ui_MapNamePanel");
            LevelManager.toolsLevel.addChild(_ui);
            DisplayUtil.align(_ui,null,AlignType.TOP_CENTER);
            _expTipUI = UIManager.getMovieClip("ui_ExpTip");
            _expTipUI.x = 208;
            _expTipUI.y = -32;
            LevelManager.tipLevel.addChild(_expTipUI);
            _ui.gotoAndStop(1);
            _ui["exp"].visible = false;
            _ui["arrow"].gotoAndStop(1);
            _ui["arrow"].buttonMode = true;
            _ui["arrow"].addEventListener(MouseEvent.CLICK,onArrowClick);
            _ui["infoMc"].scaleY = 0;
            _ui["infoMc"].alpha = 0;
            _ui["mv"].gotoAndStop(1);
            initExpTip();
            onTime(null);
            EventManager.addEventListener(SysTimeEvent.RECEIVE_SYSTEM_TIME,onTime);
         }
         _ui["nameTxt"].text = MapConfig.getName(param1);
         if((_ui["nameTxt"] as TextField).text.length > 6)
         {
            if((_loc5_ = 14 - ((_ui["nameTxt"] as TextField).text.length - 6)) < 10)
            {
               _loc5_ = 10;
            }
            _loc2_ = new TextFormat("宋体",_loc5_,16776960);
            (_ui["nameTxt"] as TextField).setTextFormat(_loc2_);
         }
         else
         {
            _loc2_ = new TextFormat("宋体",14,16776960);
            (_ui["nameTxt"] as TextField).setTextFormat(_loc2_);
         }
         var _loc3_:int = int(Map_h5.getH5MapIdByFlashMapId(param1));
         var _loc4_:IStarmapInfo;
         if((_loc4_ = Starmap_h5.getStarmapInfoByH5MapId(_loc3_)) != null)
         {
            _loc6_ = Starmaplist_h5.getStarmaplistInfoByH5StarMapId(_loc4_.id);
         }
         _ui["infoMc"]["starListNameTx"].text = _loc6_ != null ? _loc6_.name : MapConfig.getName(param1);
         _ui["infoMc"]["starNameTx"].text = _loc4_ != null ? _loc4_.name : MapConfig.getName(param1);
         _ui["infoMc"]["mapNameTx"].text = MapConfig.getName(param1);
      }
      
      private static function onOverExpHandler(param1:MouseEvent) : void
      {
         TweenLite.to(_expTipUI,0.4,{
            "y":0,
            "ease":Back.easeOut
         });
      }
      
      private static function onOutExpHandler(param1:MouseEvent) : void
      {
         TweenLite.to(_expTipUI,0.4,{
            "y":-32,
            "ease":Back.easeOut
         });
      }
      
      private static function onArrowClick(param1:MouseEvent) : void
      {
         if(!_isCanShow)
         {
            if(_ui["arrow"].currentFrame == 2)
            {
               _ui["arrow"].gotoAndStop(1);
               TweenLite.to(_ui["infoMc"],0.4,{
                  "scaleY":0,
                  "alpha":0,
                  "ease":Back.easeInOut
               });
            }
            else
            {
               _ui["arrow"].gotoAndStop(2);
               TweenLite.to(_ui["infoMc"],0.4,{
                  "scaleY":1,
                  "alpha":1,
                  "ease":Back.easeInOut
               });
            }
         }
         else if(_ui["arrow"].currentFrame == 1)
         {
            openTipEffect();
         }
         else
         {
            _isPepoleClose = true;
            closeTipEffect();
         }
      }
      
      private static function openTipEffect() : void
      {
         _ui["arrow"].gotoAndStop(2);
         _ui.gotoAndStop(1);
         if(_ui["mv"])
         {
            (_ui["mv"] as MovieClip).addFrameScript(_ui["mv"].totalFrame - 1,null);
            (_ui["mv"] as MovieClip).addFrameScript(_ui["mv"].totalFrame - 1,function():void
            {
               (_ui["mv"] as MovieClip).addFrameScript(_ui["mv"].totalFrame - 1,null);
               _mc.visible = true;
               _mc.alpha = 0;
               TweenLite.to(_mc,0.4,{"alpha":1});
               haveShow = true;
            });
            _ui["mv"].gotoAndPlay(1);
         }
      }
      
      private static function closeTipEffect() : void
      {
         _ui["arrow"].gotoAndStop(1);
         TweenLite.to(_mc,0.4,{
            "alpha":0,
            "onComplete":function():void
            {
               _ui.gotoAndStop(2);
               _ui["mv1"].gotoAndPlay(1);
               _mc.visible = false;
               haveShow = false;
            }
         });
      }
      
      private static function initExpTip() : void
      {
         SocketConnection.addCmdListener(CommandID.GET_TODAY_EXP_INFO,onExpInfoListener);
         SocketConnection.send(CommandID.GET_TODAY_EXP_INFO);
      }
      
      private static function onExpInfoListener(param1:SocketEvent) : void
      {
         var _loc6_:int = 0;
         var _loc7_:int = 0;
         var _loc8_:String = null;
         var _loc9_:Object = null;
         var _loc10_:int = 0;
         var _loc11_:int = 0;
         var _loc12_:String = null;
         SocketConnection.removeCmdListener(CommandID.GET_TODAY_EXP_INFO,onExpInfoListener);
         var _loc2_:ByteArray = param1.data as ByteArray;
         expInfos = [];
         var _loc3_:uint = _loc2_.readUnsignedInt();
         var _loc4_:Date = SystemTimerManager.sysDate;
         if(_loc3_)
         {
            _loc6_ = int(_loc2_.readUnsignedInt());
            _loc7_ = int(_loc2_.readUnsignedInt());
            _loc8_ = _loc2_.readUnsignedInt().toString();
            _specialExpStr += "  " + getTimeFromInt(_loc6_) + ":" + getTimeFromInt(_loc6_,false) + "-" + getTimeFromInt(_loc7_) + ":" + getTimeFromInt(_loc7_,false) + "--" + _loc8_ + "倍经验值";
            (_loc9_ = new Object()).time1 = _loc6_.toString();
            _loc9_.time2 = _loc7_.toString();
            _loc9_.exp = _loc8_;
            expInfos.push(_loc9_);
         }
         var _loc5_:uint;
         if(_loc5_ = _loc2_.readUnsignedInt())
         {
            _loc10_ = int(_loc2_.readUnsignedInt());
            _loc11_ = int(_loc2_.readUnsignedInt());
            _loc12_ = _loc2_.readUnsignedInt().toString();
            _specialExpStr += "  " + getTimeFromInt(_loc10_) + ":" + getTimeFromInt(_loc10_,false) + "-" + getTimeFromInt(_loc11_) + ":" + getTimeFromInt(_loc11_,false) + "--" + _loc12_ + "倍学习力";
         }
         if(_specialExpStr == "")
         {
            _expTipUI["long"].visible = false;
            _expTipUI["short"].visible = true;
         }
         else
         {
            _expTipUI["long"].visible = true;
            _expTipUI["short"].visible = false;
         }
      }
      
      private static function getTimeFromInt(param1:int, param2:Boolean = true) : String
      {
         if(param2)
         {
            return int(param1 / 100).toString();
         }
         var _loc3_:int = param1 % 100;
         if(_loc3_ < 10)
         {
            return "0" + _loc3_;
         }
         return _loc3_.toString();
      }
      
      private static function onTime(param1:SysTimeEvent) : void
      {
         SocketConnection.addCmdListener(CommandID.GET_EXP_MULTIPLE,onMultiExpListener);
         SocketConnection.send(CommandID.GET_EXP_MULTIPLE);
      }
      
      private static function onMultiExpListener(param1:SocketEvent) : void
      {
         SocketConnection.removeCmdListener(CommandID.GET_EXP_MULTIPLE,onMultiExpListener);
         var _loc2_:ByteArray = param1.data as ByteArray;
         currentExp = _loc2_.readUnsignedInt();
         currentLearn = _loc2_.readUnsignedInt();
         currentExp = currentExp == 0 ? 1 : currentExp;
         currentLearn = currentLearn == 0 ? 1 : currentLearn;
         _ui["exp"].gotoAndStop(currentExp);
         if(_specialExpStr == "")
         {
            (_expTipUI["txt"] as TextField).htmlText = "<font color=\'0xffff00\'>" + "当前经验值:" + currentExp + "倍  当前学习力:" + currentLearn + "倍</font>";
         }
         else
         {
            (_expTipUI["txt"] as TextField).htmlText = "<font color=\'0xffff00\'>" + "当前经验值:" + currentExp + "倍  当前学习力:" + currentLearn + "倍</font>" + "<font color=\'0xffff00\'>" + _specialExpStr + "</font>";
         }
      }
      
      public static function showExp() : void
      {
         _ui.exp.visible = true;
      }
      
      public static function hideExp() : void
      {
         _ui.exp.visible = false;
      }
      
      public static function show() : void
      {
         var _loc1_:Array = null;
         for each(_loc1_ in MiniMapController.mapList)
         {
            if(_loc1_.indexOf(MapManager.getMapController().newMapID) >= 0)
            {
               return;
            }
         }
         if(_ui)
         {
            _ui.visible = true;
         }
         if(_expTipUI)
         {
            _expTipUI.visible = true;
         }
      }
      
      public static function hide() : void
      {
         if(_ui)
         {
            _ui.visible = false;
         }
         if(_expTipUI)
         {
            _expTipUI.visible = false;
         }
      }
   }
}
