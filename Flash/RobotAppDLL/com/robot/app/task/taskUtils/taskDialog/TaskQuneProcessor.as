package com.robot.app.task.taskUtils.taskDialog
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.manager.MapListenerManager;
   import com.robot.core.manager.MapManager;
   import flash.display.MovieClip;
   import flash.utils.clearTimeout;
   import flash.utils.setTimeout;
   
   public class TaskQuneProcessor
   {
      
      public static const DIALOG:String = "dialog";
      
      public static const MAPMV:String = "mapMv";
      
      public static const FULLSCREENMV:String = "fullScreenMv";
      
      public static const CLICKMAPMV:String = "clickMapmV";
      
      public static const CHANGE_MAP:String = "changeMap";
       
      
      private var _taskQune:Array;
      
      private var _index:int = 0;
      
      private var _procesEndFun:Function;
      
      public function TaskQuneProcessor()
      {
         this._taskQune = [];
         super();
      }
      
      public function addDialog(param1:Array, param2:Function = null) : void
      {
         this._taskQune.push([DIALOG,param1,param2]);
      }
      
      public function addMapMv(param1:MovieClip, param2:Object = 0, param3:String = "", param4:Function = null) : void
      {
         this._taskQune.push([MAPMV,param1,param2,param3,param4]);
      }
      
      public function addClickMapMv(param1:MovieClip, param2:Object = 0, param3:String = "", param4:Function = null) : void
      {
         this._taskQune.push([CLICKMAPMV,param1,param2,param3,param4]);
      }
      
      public function addFullMv(param1:String, param2:Function = null) : void
      {
         this._taskQune.push([FULLSCREENMV,param1,param2]);
      }
      
      public function addChangeMap(param1:int, param2:Function = null) : void
      {
         this._taskQune.push([CHANGE_MAP,param1,param2]);
      }
      
      public function start() : void
      {
         var fun:Function = null;
         this._index = 0;
         fun = function():void
         {
            if(_index >= _taskQune.length)
            {
               if(null != _procesEndFun)
               {
                  _procesEndFun.call();
               }
               return;
            }
            playNext(fun);
         };
         fun.call();
      }
      
      private function playNext(param1:Function) : void
      {
         var endFun:Function;
         var target:Array = null;
         var callback:Function = null;
         var type:String = null;
         var mapMv:MovieClip = null;
         var mapId:int = 0;
         var fun:Function = param1;
         target = this._taskQune[this._index];
         ++this._index;
         endFun = function():void
         {
            if(null != callback)
            {
               callback.call();
            }
            if(null != fun)
            {
               fun.call();
            }
         };
         if(target)
         {
            type = String(target[0]);
            switch(type)
            {
               case DIALOG:
                  callback = target[2];
                  DialogUtil.playDilogs(target[1],[endFun]);
                  break;
               case MAPMV:
                  mapMv = target[1];
                  callback = target[4];
                  if(mapMv.parent == null)
                  {
                     MapManager.currentMap.controlLevel.addChild(mapMv);
                  }
                  AnimateManager.playMcAnimate(target[1],target[2],target[3],endFun);
                  break;
               case FULLSCREENMV:
                  callback = target[2];
                  AnimateManager.playFullScreenAnimate(target[1],endFun);
                  break;
               case CLICKMAPMV:
                  mapMv = target[1];
                  callback = target[4];
                  if(mapMv.parent == null)
                  {
                     MapManager.currentMap.controlLevel.addChild(mapMv);
                  }
                  AnimateManager.playMcAnimate(target[1],target[2],target[3],function():void
                  {
                     MapListenerManager.add(target[1],function():void
                     {
                        MapListenerManager.remove(target[1],false);
                        endFun();
                     });
                  });
                  break;
               case CHANGE_MAP:
                  mapId = int(target[1]);
                  callback = target[2];
                  if(MapManager.currentMap.id == mapId)
                  {
                     endFun();
                  }
                  else
                  {
                     KTool.changeMapWithCallBack(mapId,function():void
                     {
                        var tid:int = 0;
                        tid = int(setTimeout(function():void
                        {
                           clearTimeout(tid);
                           endFun();
                        },200));
                     });
                  }
            }
            return;
         }
         throw new Error();
      }
      
      public function set procesEndFun(param1:Function) : void
      {
         this._procesEndFun = param1;
      }
      
      public function destory() : void
      {
         this._procesEndFun = null;
         this._taskQune = null;
      }
   }
}
