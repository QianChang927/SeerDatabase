package com.robot.app.task.detectShip
{
   import com.robot.app.task.petstory.app.ship.DetectorPanel;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.TaskIconManager;
   import com.robot.core.manager.UIManager;
   import com.robot.core.net.SocketConnection;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import flash.events.TimerEvent;
   import flash.utils.Timer;
   import org.taomee.debug.DebugTrace;
   import org.taomee.manager.ToolTipManager;
   import org.taomee.utils.DisplayUtil;
   
   public class DetectShipCtrl
   {
      
      private static var _icon:MovieClip;
      
      public static var status:uint;
      
      public static var shipTms:uint;
      
      private static var _shipType:uint;
      
      private static var _eventType:uint;
      
      private static var _startTm:uint;
      
      private static var _curtTm:uint;
      
      private static var _totalTm:uint;
      
      private static var _cnt:uint;
      
      private static var _gapTm:uint;
      
      private static var _endTm:uint;
      
      private static var _index:uint;
      
      private static var _typeList:Array = [];
      
      private static var _timer:Timer;
      
      private static var _hasClick:Boolean = false;
      
      private static var _captCnt:uint;
      
      private static var timeMC:MovieClip;
       
      
      public function DetectShipCtrl()
      {
         super();
      }
      
      public static function setup() : void
      {
         DetectShipManager.getShipInfo(onGetShipInfo);
      }
      
      public static function showIcon() : void
      {
         if(!_icon)
         {
            _icon = UIManager.getMovieClip("DetectShip_icon");
            setIconStatus(1);
         }
         TaskIconManager.addIcon(_icon,TaskIconManager.LEFT_SIDE,2);
      }
      
      public static function startSea(param1:uint, param2:uint) : void
      {
         DetectShipManager.getShipSeaInfo(param1,param2,onCheckShipSeaInfo);
      }
      
      private static function onGetShipInfo(param1:ShipInfo) : void
      {
         var _loc2_:ShipSeaInfo = null;
         status = param1.status;
         shipTms = param1.shipTms;
         if(param1.status)
         {
            _icon = UIManager.getMovieClip("DetectShip_icon");
            _icon.buttonMode = false;
            _icon.gotoAndStop(1);
            showIcon();
            _loc2_ = new ShipSeaInfo();
            _loc2_.shipType = param1.shipType;
            _loc2_.eventType = param1.evtType;
            _loc2_.endtime = param1.endtime;
            _loc2_.shipTms = param1.shipTms;
            _captCnt = param1.monCatchCnt;
            onCheckShipSeaInfo(_loc2_);
         }
         else if(_icon)
         {
            DisplayUtil.removeForParent(_icon);
         }
      }
      
      private static function onCheckShipSeaInfo(param1:ShipSeaInfo) : void
      {
         DetectShipCtrl.showIcon();
         status = 1;
         _shipType = param1.shipType;
         shipTms = param1.shipTms;
         _eventType = param1.eventType;
         switch(param1.shipType)
         {
            case 1:
               _totalTm = 1 * 60;
               _cnt = 4;
               _gapTm = 15;
               break;
            case 2:
               _totalTm = 1 * 60;
               _cnt = 4;
               _gapTm = 15;
               break;
            case 3:
               _totalTm = 1 * 60 + 30;
               _cnt = 6;
               _gapTm = 15;
         }
         _startTm = _totalTm - param1.endtime;
         _curtTm = _startTm;
         _index = 0;
         getTypeList();
         setSpaceItem();
         _endTm = param1.endtime;
         checkEndTm(_endTm);
         DetectorPanel.getInstance();
      }
      
      private static function getTypeList() : void
      {
         if(_shipType == 1)
         {
            switch(_eventType)
            {
               case 1:
                  _typeList = [1,2,0,2];
                  break;
               case 2:
                  _typeList = [0,2,1,2];
                  break;
               case 3:
                  _typeList = [2,2,1,0];
            }
         }
         else if(_shipType == 2)
         {
            switch(_eventType)
            {
               case 1:
                  _typeList = [0,0,1,0];
                  break;
               case 2:
                  _typeList = [1,0,0,0];
                  break;
               case 3:
                  _typeList = [0,0,1,0];
            }
         }
         else if(_shipType == 3)
         {
            switch(_eventType)
            {
               case 1:
                  _typeList = [0,1,0,0,1,0];
                  break;
               case 2:
                  _typeList = [1,0,0,1,0,0];
                  break;
               case 3:
                  _typeList = [0,1,0,1,0,0];
            }
         }
      }
      
      private static function checkEndTm(param1:uint) : void
      {
         if(_endTm == 0)
         {
            setIconStatus(3);
         }
         else
         {
            if(!_timer)
            {
               _timer = new Timer(1000);
            }
            _timer.addEventListener(TimerEvent.TIMER,onTimer);
            _timer.reset();
            _timer.start();
         }
      }
      
      private static function onTimer(param1:TimerEvent) : void
      {
         var _loc5_:String = null;
         var _loc6_:Array = null;
         var _loc7_:uint = 0;
         var _loc8_:uint = 0;
         ++_curtTm;
         refreshGoods();
         if(_curtTm == _totalTm)
         {
            setIconStatus(3);
            if(timeMC)
            {
               timeMC.visible = false;
               timeMC.removeEventListener(MouseEvent.CLICK,onMouseTimeMC);
               timeMC = null;
            }
            DebugTrace.show("航行结束");
            return;
         }
         var _loc2_:uint = _curtTm % _gapTm;
         DebugTrace.show("当前index:" + _loc2_);
         if(_curtTm > _gapTm && _loc2_ <= 12 && _loc2_ >= 0)
         {
            _index = Math.floor(_curtTm / _gapTm);
            if(_typeList[_index - 1] == 1 && _captCnt >= 2 || _typeList[_index - 1] == 2 || _typeList[_index - 1] == 0)
            {
               _hasClick = true;
            }
            if(!_hasClick)
            {
               setIconStatus(2);
            }
         }
         else
         {
            _hasClick = false;
            removeEvtTips();
         }
         DebugTrace.show("当前航行时间:" + _curtTm + "/" + _totalTm);
         var _loc3_:uint = Math.floor((_totalTm - _curtTm) / 60);
         var _loc4_:String = String((_totalTm - _curtTm) % 60);
         if(uint(_loc4_) < 10)
         {
            _loc4_ = "0" + _loc4_;
         }
         if(DetectShipManager.existDetectorPanel)
         {
            DetectorPanel.getInstance().setLeftTime(_totalTm - _curtTm);
         }
         if(MapManager.currentMap.id == 7)
         {
            if(!timeMC)
            {
               timeMC = MapManager.currentMap.controlLevel["timeMC"];
               timeMC.buttonMode = true;
               timeMC.addEventListener(MouseEvent.CLICK,onMouseTimeMC);
            }
            timeMC.visible = true;
            if(!timeMC.parent)
            {
               MapManager.currentMap.controlLevel.addChild(timeMC);
            }
            _loc6_ = (_loc5_ = String(_loc3_) + _loc4_).split("");
            _loc8_ = 0;
            while(_loc8_ < _loc6_.length)
            {
               _loc7_ = uint(int(_loc6_[_loc8_]) + 1);
               (timeMC["num_" + _loc8_] as MovieClip).gotoAndStop(_loc7_);
               _loc8_++;
            }
         }
      }
      
      private static function onMouseTimeMC(param1:MouseEvent) : void
      {
         DetectorPanel.getInstance();
      }
      
      private static function setSpaceItem() : void
      {
         switch(_shipType)
         {
            case 1:
               DetectorPanel.openCells = 1;
               break;
            case 2:
               DetectorPanel.openCells = 3;
               break;
            case 3:
               DetectorPanel.openCells = 4;
         }
      }
      
      private static function refreshGoods() : void
      {
         var _loc1_:uint = uint(int(_curtTm / _gapTm));
         var _loc2_:uint = getItemsNum(_loc1_);
         if(DetectorPanel.isShow)
         {
            DetectorPanel.getInstance().refreshItems(_loc2_);
         }
         if(_curtTm == _totalTm)
         {
            if(DetectorPanel.isShow)
            {
               DetectorPanel.getInstance().isActiveBtn();
               if(_icon)
               {
                  DisplayUtil.removeForParent(_icon);
               }
            }
         }
      }
      
      private static function getItemsNum(param1:uint) : uint
      {
         var _loc2_:uint = 0;
         var _loc3_:uint = 0;
         while(_loc3_ < param1)
         {
            if(_typeList[_loc3_] == 0)
            {
               _loc2_++;
            }
            _loc3_++;
         }
         return _loc2_;
      }
      
      private static function removeEvtTips() : void
      {
         _hasClick = false;
         setIconStatus(1);
      }
      
      private static function onShowItemBack(param1:MouseEvent) : void
      {
         SocketConnection.send(1022,86057313);
         if(DetectorPanel.isOver)
         {
            DisplayUtil.removeForParent(_icon);
         }
         DetectorPanel.getInstance();
      }
      
      private static function onShowShipEvent(param1:MouseEvent) : void
      {
         SocketConnection.send(1022,86057313);
         setIconStatus(1);
         _hasClick = true;
         ModuleManager.showModule(ClientConfig.getAppModule("ShipSeaEventsPanel"),"正在打开面板",_typeList[_index - 1]);
      }
      
      private static function setIconStatus(param1:uint) : void
      {
         switch(param1)
         {
            case 1:
               _icon.gotoAndStop((_shipType - 1) * 3 + 1);
               _icon.buttonMode = true;
               _icon.removeEventListener(MouseEvent.CLICK,onShowShipEvent);
               _icon.addEventListener(MouseEvent.CLICK,onShowItemBack);
               DetectorPanel.isOver = false;
               ToolTipManager.add(_icon,"探测飞船将在" + (_totalTm - _curtTm).toString() + "秒后返航!");
               break;
            case 2:
               _icon.gotoAndStop((_shipType - 1) * 3 + 2);
               _icon.buttonMode = true;
               _icon.removeEventListener(MouseEvent.CLICK,onShowItemBack);
               _icon.addEventListener(MouseEvent.CLICK,onShowShipEvent);
               DetectorPanel.isOver = false;
               switch(_typeList[_index - 1])
               {
                  case 1:
                     ToolTipManager.add(_icon,"探测飞船发现了未知精灵");
               }
               if(DetectShipManager.existDetectorPanel)
               {
                  onShowShipEvent(null);
               }
               break;
            case 3:
               _icon.gotoAndStop((_shipType - 1) * 3 + 3);
               _icon.buttonMode = true;
               _icon.removeEventListener(MouseEvent.CLICK,onShowShipEvent);
               _icon.addEventListener(MouseEvent.CLICK,onShowItemBack);
               DetectorPanel.isOver = true;
               ToolTipManager.add(_icon,"探测飞船已经返航，请回收获得的发现物");
               _captCnt = 0;
               if(_timer)
               {
                  _timer.removeEventListener(TimerEvent.TIMER,onTimer);
                  _timer.stop();
                  _timer = null;
               }
         }
      }
   }
}
