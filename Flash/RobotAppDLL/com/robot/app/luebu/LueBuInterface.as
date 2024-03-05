package com.robot.app.luebu
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.PetManager;
   import com.robot.core.net.SocketConnection;
   import flash.net.SharedObject;
   
   public class LueBuInterface
   {
      
      private static var _instance:com.robot.app.luebu.LueBuInterface;
       
      
      private var _havePlayedMovie:Boolean;
      
      public function LueBuInterface()
      {
         super();
         if(_instance)
         {
            throw new Error("请使用 LueBuInterface.getInstance() 调用该实例。");
         }
         var _loc1_:SharedObject = SharedObject.getLocal(LueBuConst.LOCAL_DATA_NAME);
         if(_loc1_)
         {
            this._havePlayedMovie = Boolean(_loc1_.data[MainManager.actorID]);
         }
         else
         {
            this._havePlayedMovie = false;
         }
      }
      
      public static function getInstance() : com.robot.app.luebu.LueBuInterface
      {
         if(!_instance)
         {
            _instance = new com.robot.app.luebu.LueBuInterface();
         }
         return _instance;
      }
      
      public static function doKeyToGet() : void
      {
         buyProduct(LueBuManager.getInstance().superProduct,LueBuManager.getInstance().superExchange);
      }
      
      public static function doOpenGetLueBuPanel() : void
      {
         openModule(LueBuConst.PANEL_NAME_GET_LUEBU);
      }
      
      public static function doKeyToEvolve() : void
      {
         KTool.buyProductByCallback(LueBuManager.getInstance().superEvoPro,1,function():void
         {
            PetManager.superEvolve(LueBuManager.getInstance().superEvolveId,function():void
            {
            });
         });
      }
      
      public static function doActivate(param1:uint, param2:uint, param3:Function) : void
      {
         var catchTimeLuebu:uint = param1;
         var catchTimeDiaochan:uint = param2;
         var callBack:Function = param3;
         SocketConnection.sendWithCallback2(LueBuManager.getInstance().protocolId,function():void
         {
            callBack.apply();
         },[catchTimeLuebu,catchTimeDiaochan]);
      }
      
      public static function doOpenGetLueBu() : void
      {
         openModule(LueBuConst.PANEL_NAME_BUY_LUEBU);
      }
      
      public static function doOpenDiaoChan() : void
      {
         openModule(LueBuConst.PANEL_NAME_VIP_MONTH);
      }
      
      private static function openModule(param1:String, param2:Object = null) : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule(param1),"正在打开……",param2);
      }
      
      private static function buyProduct(param1:int, param2:int, param3:Function = null) : void
      {
         var productId:int = param1;
         var exchange:int = param2;
         var callBack:Function = param3;
         KTool.buyProductByCallback(productId,1,function():void
         {
            KTool.doExchange(exchange,function():void
            {
               if(null != callBack)
               {
                  callBack.apply();
               }
            });
         });
      }
      
      public function playMovie(param1:Function) : void
      {
         var callBack:Function = param1;
         if(this._havePlayedMovie)
         {
            callBack.apply();
            return;
         }
         AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie(LueBuManager.getInstance().movieUrl),function():void
         {
            _havePlayedMovie = true;
            var _loc1_:SharedObject = SharedObject.getLocal(LueBuConst.LOCAL_DATA_NAME);
            if(null == _loc1_)
            {
               _loc1_ = new SharedObject();
            }
            _loc1_.data[MainManager.actorID] = _havePlayedMovie;
            _loc1_.flush();
            callBack.apply();
         });
      }
   }
}
