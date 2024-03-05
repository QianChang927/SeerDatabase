package com.robot.app2.control.ChildrensDay2013
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.CommandID;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.config.xml.PetXMLInfo;
   import com.robot.core.event.MCLoadEvent;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.newloader.MCLoader;
   import com.robot.core.utils.TextFormatUtil;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import flash.utils.ByteArray;
   import org.taomee.events.SocketEvent;
   import org.taomee.utils.DisplayUtil;
   import org.taomee.utils.Utils;
   
   public class ChildrensDay2013TreasureBeachController
   {
      
      private static var _tipPanel:MovieClip = null;
      
      private static var _resourceLoader:MCLoader;
       
      
      public function ChildrensDay2013TreasureBeachController()
      {
         super();
      }
      
      public static function initForNpc() : void
      {
         SocketConnection.addCmdListener(CommandID.CHILDRENSDAY2013_GET_HAVEBOTTLES,onLeftBottleGot);
         SocketConnection.send(CommandID.CHILDRENSDAY2013_GET_HAVEBOTTLES);
      }
      
      private static function onLeftBottleGot(param1:SocketEvent) : void
      {
         SocketConnection.removeCmdListener(CommandID.CHILDRENSDAY2013_GET_HAVEBOTTLES,onLeftBottleGot);
         var _loc2_:uint = (param1.data as ByteArray).readUnsignedInt();
         if(_loc2_ != 0)
         {
            ModuleManager.showModule(ClientConfig.getAppModule("ChildrensDay2013/ChildrensDay2013TreasureBeachInteractivePanel"),"正在打开...",_loc2_);
         }
         else
         {
            ModuleManager.showModule(ClientConfig.getAppModule("ChildrensDay2013/ChildrensDay2013TreasureBeachPanel"));
         }
      }
      
      public static function alert(param1:uint, param2:uint = 0, param3:Function = null, param4:Function = null, param5:String = "") : void
      {
         var type:uint = param1;
         var petId:uint = param2;
         var applyCallBack:Function = param3;
         var cancelCallBack:Function = param4;
         var cost:String = param5;
         if(_tipPanel == null)
         {
            _resourceLoader = new MCLoader(ClientConfig.getResPath("forApp/ChildrensDay2013TipPanel.swf"));
            _resourceLoader.addEventListener(MCLoadEvent.SUCCESS,function():void
            {
               _resourceLoader.removeEventListener(MCLoadEvent.SUCCESS,arguments.callee);
               _tipPanel = Utils.getMovieClipFromLoader("ChildrensDay2013TipPanel_UI",_resourceLoader.loader);
               _resourceLoader = null;
               showPanel(type,petId,applyCallBack,cancelCallBack,cost);
            });
            _resourceLoader.doLoad();
         }
         else
         {
            showPanel(type,petId,applyCallBack,cancelCallBack,cost);
         }
      }
      
      private static function showPanel(param1:uint, param2:uint = 0, param3:Function = null, param4:Function = null, param5:String = "") : void
      {
         var onApply:Function = null;
         var onCancel:Function = null;
         var type:uint = param1;
         var petId:uint = param2;
         var applyCallBack:Function = param3;
         var cancelCallBack:Function = param4;
         var cost:String = param5;
         var addPanelEvent:Function = function():void
         {
            var _loc1_:uint = 1;
            while(_loc1_ <= 6)
            {
               if(_tipPanel["tipPanel"]["frame_" + _loc1_ + "_1"])
               {
                  _tipPanel["tipPanel"]["frame_" + _loc1_ + "_1"].addEventListener(MouseEvent.CLICK,onApply);
               }
               if(_tipPanel["tipPanel"]["frame_" + _loc1_ + "_2"])
               {
                  _tipPanel["tipPanel"]["frame_" + _loc1_ + "_2"].addEventListener(MouseEvent.CLICK,onCancel);
               }
               _loc1_++;
            }
         };
         var removePanelEvent:Function = function():void
         {
            var _loc1_:uint = 1;
            while(_loc1_ <= 6)
            {
               if(_tipPanel["tipPanel"]["frame_" + _loc1_ + "_1"])
               {
                  _tipPanel["tipPanel"]["frame_" + _loc1_ + "_1"].removeEventListener(MouseEvent.CLICK,onApply);
               }
               if(_tipPanel["tipPanel"]["frame_" + _loc1_ + "_2"])
               {
                  _tipPanel["tipPanel"]["frame_" + _loc1_ + "_2"].removeEventListener(MouseEvent.CLICK,onCancel);
               }
               _loc1_++;
            }
         };
         var showOrhideBtn:Function = function():void
         {
            var _loc1_:uint = 1;
            while(_loc1_ <= 6)
            {
               if(_loc1_ != type)
               {
                  if(_tipPanel["tipPanel"]["frame_" + _loc1_ + "_1"])
                  {
                     _tipPanel["tipPanel"]["frame_" + _loc1_ + "_1"].visible = false;
                  }
                  if(_tipPanel["tipPanel"]["frame_" + _loc1_ + "_2"])
                  {
                     _tipPanel["tipPanel"]["frame_" + _loc1_ + "_2"].visible = false;
                  }
               }
               else
               {
                  if(_tipPanel["tipPanel"]["frame_" + _loc1_ + "_1"])
                  {
                     _tipPanel["tipPanel"]["frame_" + _loc1_ + "_1"].visible = true;
                  }
                  if(_tipPanel["tipPanel"]["frame_" + _loc1_ + "_2"])
                  {
                     _tipPanel["tipPanel"]["frame_" + _loc1_ + "_2"].visible = true;
                  }
               }
               _loc1_++;
            }
         };
         onApply = function(param1:MouseEvent):void
         {
            hide();
            if(applyCallBack != null)
            {
               applyCallBack();
            }
         };
         onCancel = function(param1:MouseEvent):void
         {
            hide();
            if(cancelCallBack != null)
            {
               cancelCallBack();
            }
         };
         var hide:Function = function():void
         {
            removePanelEvent();
            DisplayUtil.removeForParent(_tipPanel);
         };
         LevelManager.appLevel.addChild(_tipPanel);
         KTool.setPanelMid(_tipPanel);
         showOrhideBtn();
         addPanelEvent();
         _tipPanel["tipPanel"].gotoAndStop(type);
         switch(type)
         {
            case 1:
               _tipPanel["tipPanel"]["content"].htmlText = "你没有六一狂欢礼券哦，快去收集吧！";
               break;
            case 2:
               _tipPanel["tipPanel"]["bottle"].gotoAndStop("frame_" + petId);
               _tipPanel["tipPanel"]["content"].htmlText = TextFormatUtil.getYellowTxt(PetXMLInfo.getName(petId) + "漂流瓶") + "需要" + TextFormatUtil.getYellowTxt(cost);
               break;
            case 3:
               _tipPanel["tipPanel"]["bottle"].gotoAndStop("frame_" + petId);
               _tipPanel["tipPanel"]["content"].htmlText = "恭喜你！成功购买了" + TextFormatUtil.getYellowTxt(PetXMLInfo.getName(petId) + "漂流瓶") + "，赶快去打捞吧！";
               break;
            case 4:
               _tipPanel["tipPanel"]["bottle"].gotoAndStop("frame_" + petId);
               _tipPanel["tipPanel"]["content"].htmlText = "恭喜你成功获得了" + TextFormatUtil.getYellowTxt(PetXMLInfo.getName(petId));
               break;
            case 5:
               _tipPanel["tipPanel"]["content"].htmlText = "你没有打捞到正确的漂流瓶，再试一次吧！";
               break;
            case 6:
               _tipPanel["tipPanel"]["content"].htmlText = "使用沙漏能够快速更新漂流瓶，一个沙漏需要花费" + TextFormatUtil.getYellowTxt("5000赛尔豆") + "。";
         }
      }
      
      public static function destroy() : void
      {
         SocketConnection.removeCmdListener(CommandID.CHILDRENSDAY2013_GET_HAVEBOTTLES,onLeftBottleGot);
      }
   }
}
